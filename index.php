<?php
    require_once 'mail.php';
?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
<meta name="title" content="Natalia Włodarczyk - Portfolio" />
<meta name="robots" content="index, follow">
<link rel="shortcut icon" href="img/favicon.ico">
<meta name="description" content="Nazywam się Natalia Włodarczyk, jestem grafikiem freelancerem. Rysowanie od zawsze było moją pasją, będąc dzieckiem wszystkie pomysły przelewałam na kartkę. Kilka lat temu postanowiłam to zmienić i wszystkie swoje projekty przelać do komputera, tak właśnie grafika komputerowa stała się tym co chciałabym robić.  Ciągle staram się zgłębiać tajniki grafiki komputerowej." />
<meta name="keywords" content="natalia,wlodarczyk,designer,projektant,grafik,łódź,województwo łódzkie, koluszki, gałkówek, portfolio" />
<meta name="author" content="Michał Parysz" />
<meta charset="utf-8" >
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<link href='https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="img/nw.css">
<link rel="stylesheet" type="text/css" href="img/main.css">
<title></title>
</head>
<body>
    <script type="text/javascript" src="script/fbApi.js"></script>
    <div class="container">
        <div class="header">
            <div class="header-main">
                <div class="logo">
                    <a href="index.php">
                        <img class="noselect"  onClick=”return true” src="img/nw.png" />
                    </a>
                </div>
                <div class="header-main-menu">
                    <ul>
                        <li class="scrolltop noselect" onClick=”return true”>Start</li>
                        <li class="scrollAbout noselect" onClick=”return true”>O mnie</li>
                        <li class="scrollWork noselect" onClick=”return true”>Portfolio</li>
                        <li class="scrollContact noselect" onClick=”return true”>Kontakt</li>
                    </ul>

                </div>
                <div style="clear:both;"></div>
            </div>
        </div>
        <div class="loading">
            <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
        </div>
        <div class="galleryBox" onclick="closeBox();">
            <img />
            <div class="closeBox" onclick="closeBox();">x</div>
        </div>
        <div class="main">
            <div class="cytat">
                 <h1>
                    <font style="text-shadow: 1px 1px #4d4d4d;">N</font><font style="color:#009688">.</font>
                    <font style="text-shadow: 1px 1px #4d4d4d;">WŁODARCZYK</font>
                </h1>
                <h3>
                    <font style="text-shadow: 1px 1px #4d4d4d;">GRAFIK </font>
                    <font style="color:#009688">-</font>
                    <font style="text-shadow: 1px 1px #4d4d4d;">DESIGNER </font>
                    <font style="color:#009688">-</font>
                    <font style="text-shadow: 1px 1px #4d4d4d;">PROJEKTANT</font>
                </h3>
            </div>
        </div>
        <div class="mainopis">
            <img src="img/photo.png" />
            <div class="iconsWithDescription">
                    <div class="text">
                        <i class="icon-heart texton"></i>
                    </div>
                    <div class="text">
                        <i class="icon-star"></i>
                    </div>
                    <div class="text">
                        <i class="icon-graduation-cap"></i>
                    </div>
                    <div style="clear:both;"></div>
            </div>
            <div class="textUnderIcons">
                <div class="showtext1 textActive">
                    <h1>PASJA</h1>
                    Nazywam się Natalia Włodarczyk, jestem grafikiem freelancerem. Rysowanie od zawsze było moją pasją, będąc dzieckiem wszystkie pomysły przelewałam na kartkę. Kilka lat temu postanowiłam to zmienić i wszystkie swoje projekty przelać do komputera, tak właśnie grafika komputerowa stała się tym co chciałabym robić.  Ciągle staram się zgłębiać tajniki grafiki komputerowej.
                </div>
                <div class="showtext2">
                    <h1>DOŚWIADCZENIE</h1>
                    Dotychczas wykonywałam projekty dla małych firm  takie jak wizytówki, plakaty, logotypy. Jednym z większych doświadczeń, a jednocześnie spełnieniem mojego marzenia było wystawienie mojej pracy w Łódzkiej galerii sztuki.
                  </div>
                <div class="showtext3">
                    <h1>UMIEJĘTNOŚCI</h1>
                    Grafiki uczę się na Politechnice Łódzkiej, kierunek Wzornictwo, specjalizacja Komunikacja Wizualna. W swojej pracy wykorzystuję głównie takie programy jak Adobe Illustrator oraz Adobe Photoshop. Szkolę się również z Adobe Indesign i Adobe Flash. Staram się, aby prace które wychodzą spod mojej „myszki”  były niebanalne i  starannie wykonane.
                  </div>
              </div>
          </div>
        <div id="work">
            <h1>PLAKATY</h1>
            <div id="gallery"></div>
            <hr />
            <h1>LOGOTYPY</h1>
            <div id="logoTypy"></div>
        </div>
        <div class="contact">
             <h3>
                Chcesz mi zlecić <font style="color:#009688;">wykonanie projektu?</font>
            </h3>
             <h3>
                Albo może masz dla mnie inną <font style="color:#009688;">propozycje?</font>
            </h3>
             <h3>
                <font style="color:#009688;">Napisz</font> do mnie lub <font style="color:#009688;">zadzwoń</font> to omówimy szczegóły
            </h3>
                <div class="contactIconsMail">
                    <div class="contactIcons"><i class="icon-mail-alt"></i> <font style="color:#009688;">natalia.wlodarczyk155@gmail.com</font> </div>
                </div>
                <div class="contactIconsPhone">
                    <div class="contactIcons"><i class="icon-phone"></i> <font style="color:#009688;">660-479-419</font></div>
                    <div style="clear:both"></div>
                </div>
            <h3>
                lub skorzystaj z formularza
            </h3>
             <form method="POST" action="index.php">
                <input class="contactInput" type="text" name="imie" placeholder="Proszę podać imię" value=""><br>
                <input class="contactInput" type="text" name="nazwisko" placeholder="Proszę podać nazwisko" value=""><br>
                <input class="contactInput" type="text" name="kontakt" placeholder="Proszę podać swój e-mail" value=""><br>
                <textarea class="contactInput" name="wiadomosc" placeholder="Proszę wprowadzić wiadomość"></textarea><br>
                <input class="contactBtn" type="submit" value="Wyślij wiadomość">
            </form>
        </div>
        <div class="fb">
             <a href="https://www.facebook.com/Natalia-W%C5%82odarczyk-design-1758384481103227/" target="_blank">
                <div class="icon-facebook"></div>
            </a>
        </div>
        <div class="fixedbtn scrolltop">
            <i class="icon-up-open" style="font-size:50px;"></i>
        </div>
        <div class="footer">
               2017 © <font style="color:white;">Natalia Włodarczyk</font>. Wszelkie prawa zastrzeżone. Realizacja <font style="color:white;">Michał Parysz</font>
        </div>
    </div>
</body>
<script type="text/javascript" src="script/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="script/main.js"></script>
</html>
