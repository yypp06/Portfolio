<?
    require_once('conn.php');
    require_once('utils.php');
    require_once('checkLogin.php'); 

    $token = false;

?>



<!DOCTYPE html>
<html lang="en">
<head>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

    <title>留言板</title>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    
    <style>
        body{          
        background-image: url(https://i.pinimg.com/originals/0d/2c/0e/0d2c0e0afd40114e18bc605c3ec38158.jpg);
        background-repeat: no-repeat;
        background-attachment:fixed;
        background-position: 10% 40%;     
        background-color:#f6f6f6;         
        }
       
        .boardTitle{
            text-align: center;
            font-size: 50px;
            margin-top: 4%;
        } 
        a{
            color: white;
        }

        .commentHead{
            padding-top: 15px;
        }
        .boardMain{
            width: 500px;
            margin: 0px auto;
            border-radius: 5px;
        }
        textarea{
            width: 99%;
            height: 200px;
            margin-top: 2px;
            border-radius: 5px; 
        }

        .btn{
            background-color: #f6f6f6; 
        }
        .boardtext{
            background-color: #f6f6f6;
        }
        .name input{
            width: 25%;
        }
        .btn input{
            margin-top: 5px;
            padding: 8px 25px;
            font-size: 20px;
            color: #fff;
            background: #6e6862;
            border-radius: 5px;
            cursor: pointer;   
        }
        .comment{
            border: 1px solid rgba(0, 0, 0, 0.1);
            margin: 20px 18px;
            border-left: none;
            border-right: none;
            border-top: none;
            border-radius: 5px;
        }
        
        .creatTime{
            margin-bottom: 4px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.5);
            display: inline;        
        }
        .reply{
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 21px;
            position: relative;
            border-radius: 5px;
        }
        .replyBoard{
            border: 1px solid rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            border-bottom: none;
            background: #d2d4d4;
            border-radius: 5px;
 
        }

        .replyBoard textarea {
            width: 99%;
            height: 200px;
            margin-top: 20px;
        }

        .replyBoard .btn{
            margin-left: 77%;
            margin-bottom: 20px;
            background-color:#d2d4d4;

        }

        .deleteComment {
            position: relative;
            float: right;
            margin-right: 20px;
            padding-top: 20px;
    
        }

        .deleteComment input[type=submit]{
            font-size: 15px;
            color: #fff;
            background: #6e6862;
            border-radius: 5px;
            cursor: pointer;
        }
        .editComment {
            position: relative;
            float: right;
            display:  inline-block;
            margin-right: 5px;
            padding-top: 20px;
        }

        .editComment input[type=submit]{
            font-size: 15px;
            color: #fff;
            background: #6e6862;
            border-radius: 5px;
            cursor: pointer;
        }
        .page{
            text-align: center;
            margin-top: 20px;
        }
        .page a{
            margin-left: 5px;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-dark alert alert-dark">
        <span class="d-block p-2 text-white">
            <?php if(!$user){ ?>

                    <a href="register.php">註冊</a>
                    <a href="login.php">登入</a>

            <?php }else{ ?>

                    <a href="logout.php">登出</a>

            <?php

                    echo "Hello,";
                    echo $user; ?>        
                     
            <?php } ?>
        </span>
    </nav>
    <div class='boardMain' > 
        <h1 class='boardTitle'>留言板</h1>
        <div class="boardForm">
            <div class= "formpar">
            <form method="POST" action="addComment.php">
                <div class="boardtext"><textarea name="content" placeholder="留言內容"></textarea></div>
                <input type="hidden" name="parent_id" value="0" />
                <?
                    if($user){
                        echo "<div class='btn'><input type='submit' value='送出'></div>";
                    }else{
                            
                    }
                ?>
            </form>
            </div>
        <div class="replyBoard">
<?
    require_once("conn.php");

      $page = 1;
      if (isset($_GET['page']) && !empty($_GET['page'])) {
        $page = (int) $_GET['page'];
      }
      $size = 5;
      $start = $size * ($page - 1);   
    $sql = "
        SELECT c.id, c.content, c.time, c.username, u.nickname
        FROM yypp06_comments as c
        LEFT JOIN yypp06_users as u
        ON c.username = u.username 
        where c.parent_id = 0 
        order by time DESC
        LIMIT ?, ?
         
    ";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ii', $start, $size);
    $is_success = $stmt->execute();
    $result = $stmt->get_result();

    if($is_success){
        while($row = $result ->fetch_assoc()){
?>

                <div class='comment'>
            <?
                    if($user === $row['username']){
                        echo renderDeleteBtn($row['id']);
                        echo renderEditBtn($row['id']);
                    }

            ?>
                    <div class="commentHead">
                        <div class="author"><? echo $row['nickname']?></div>
                        <div class="creatTime"><? echo $row['time']?></div>
                    </div>
                    <div class="content"><? echo htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8')?></div>

                </div>

            <div class='reply'>

                <?
                    $parent_id = $row['id'];
                    $sql_child = "
                        SELECT c.id, c.content, c.time, c.username, u.nickname
                        FROM yypp06_comments as c
                        LEFT JOIN yypp06_users as u
                        ON c.username = u.username 
                        where c.parent_id = ?
                         
                    ";                   
                    $stmt_child = $conn->prepare($sql_child);
                    $stmt_child->bind_param('i', $parent_id);
                    $is_child_success = $stmt_child->execute();
                    $result_child = $stmt_child->get_result();

                    if($is_child_success){
                        while($row_child = $result_child ->fetch_assoc()){
                    
                ?>
                <?
                    if($user === $row_child['username']){
                        echo renderDeleteBtn($row_child['id']);
                        echo renderEditBtn($row_child['id']);
                    }

                ?>                
                     <div class='comment'>
                        <div class="commentHead">
                            <div class="author"><? echo $row_child['nickname']?></div>
                            <div class="creatTime"><? echo $row_child['time']?></div>
                        </div>
                        <div class="content"><? echo htmlspecialchars($row_child['content'], ENT_QUOTES, 'utf-8')?></div>
                         

                    </div>
                <?
                        }
                    }
                ?>
                
                <div class="boardForm">
                    <form method="POST" action="addComment.php">
                        <div><textarea name="content" placeholder="留言內容"></textarea></div>
                        <input type="hidden" name="parent_id" value="<? echo $row['id']?>" />
                        <?
                            if($user){
                                echo "<div class='btn'><input type='submit' value='送出'></div>";
                            }else{
                                    
                            }
                        ?>
                    </form>
                </div>
            </div>
            
            <hr/>

<?
        }  
    }
?>
<?php 
            $count_sql = "SELECT count(*) as count FROM yypp06_comments where parent_id=0";
            $stmt_count = $conn->prepare($count_sql);
            $is_count_success = $stmt_count->execute();
            $count_result = $stmt_count->get_result();

            if($is_count_success && $count_result->num_rows >0){
                $count= $count_result->fetch_assoc()['count'];
                $size = 5;
                $total_page = ceil($count / $size);
                echo "<div class='page'>";
                for($i=1; $i<= $total_page; $i++){
                    echo "<a href='index.php?page=$i' >$i</a>";
                }
                echo "</div>"; 
            }
?>
      
        </div>
    </div>
</body>
</html>