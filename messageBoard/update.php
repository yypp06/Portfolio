<?php
include_once('conn.php');
if (!empty($_POST))
{
mysql_query("UPDATE yypp06_comment SET user_id = '$_POST["username"]', comment = '$_POST["comment"]' WHERE username = '$_POST[username]'");
}
/textarea> <input type="submit" /> </form> <?php } ?> 