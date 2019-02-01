<?

  include_once('checkLogin.php');
  require_once('conn.php');
  require_once('utils.php');

  if (isset($_POST['id']) && !empty($_POST['id'])) {
      $id = $_POST['id'];
      $sql = "DELETE FROM yypp06_comments where (id= ? or parent_id= ?) AND username = ?";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param('iis', $id, $id, $user);

      if ($stmt->execute()) {
         
        header('Location:index.php');
      } else {
        }
  }
        
?>