<?php
$conn = mysqli_connect("127.0.0.1:49212", "azure", "6#vWHD_$", "eathealthy");
        
        // Check connection
        if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}
if(isset($_POST['submit']))
{    
     $name = $_POST['name'];
     $email = $_POST['email'];
     $phone = $_POST['phone'];
     $message = $_POST['message'];
     $sql = "INSERT INTO contact (name,email,phone,message)
     VALUES ('$name','$email','$phone','$message')";
     if (mysqli_query($conn, $sql)) {
        echo "<script>window.location.href = 'thankyou.html';</script>";
     } else {
        echo "Error: " . $sql . "
" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>
