<?
    require_once('conn.php');

    mysql_query('DELETE FROM yypp06_comments WHERE user_id=$_GET['user_id']');


?>