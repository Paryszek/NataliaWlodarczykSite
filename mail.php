<?php
    function sendMail($where,$topic,$description,$messageHeader){
        if(mail($where,$topic,$description,$messageHeader)){
        }else{
            echo "Error while trying to send an e-mail!";
        }
    }
    if($_POST['imie'] != '' AND $_POST['nazwisko'] != '' AND $_POST['kontakt'] != '' AND $_POST['wiadomosc'] != '')
    {
        $contactsFirstName = $_POST['imie'];
        $contactsSecondName = $_POST['nazwisko'];
        $contactsInfo = $_POST['kontakt'];
        $messageDescription = $_POST['wiadomosc'];
        $messageTopic = "Nowa wiadomość z twojego portfolio";
        $messageHeader = "Content-type: text/plain; charset=utf-8";
        $messageHeader .= "Nowa wiadomość z twojego portfolio\r\n";
        $messageHeader .= "Od $contactsFirstName $contactsSecondName\r\n";
        $messageHeader .= "Kontakt: $contactsInfo\r\n";
        $sendToFirst = "natalia.wlodarczyk155@gmail.com";
        $sendToSec = "michal.parysz@yahoo.com";

        sendMail($sendToFirst,$messageTopic,$messageDescription,$messageHeader);
        sendMail($sendToSec,$messageTopic,$messageDescription,$messageHeader);
        Header("Refresh: 1; url=index.php");
    }
?>

