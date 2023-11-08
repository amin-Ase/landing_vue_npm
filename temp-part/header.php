<!-- page header -->
<header class="header bg-white border-bottom border-16">
    <div class="container">

        <div class="h-contents flex">

            <!--  hamburger icon  -->
            <?php include('../temp-part/widget/hamburger.php') ?>

            <!------   logo   ------>
            <div class="logoWrapper">
                <a class="flex" href="https://payju.ir/">
                    <img class="header-logo" width="100" height="60" src="../assets/logo.png" alt="logo"
                         loading="lazy">
                </a>
            </div>

            <!------    links   ------>
            <nav class="header-nav">
                <ul class="flex header-links">

                    <li class="nav-item home">
                        <a class="nav-link active" href="#">خانه</a>
                    </li>
                    <li class="nav-item category">
                        <a class="nav-link" href="#">دسته‌بندی مشاغل</a>
                    </li>
                    <li class="nav-item discount">
                        <a class="nav-link" href="#">تخفیف‌ها</a>
                    </li>
                    <li class="nav-item luxury">
                        <a class="nav-link" href="#">مجله لاکچری</a>
                    </li>
                    <li class="nav-item aboutBiz">
                        <a class="nav-link" href="#">دانستنی‌های کسب و کار</a>
                    </li>

                </ul>
            </nav>

            <!--  Business registration  -->
            <a href="#" class="bizRegister radius-50 mr-auto btn-primary border-rotate">
                <?php include('../temp-part/widget/button.php') ?>
            </a>

        </div>

    </div>

<!--  loader  -->
<div class="d-none"><?php include('../assets/svg/dotsLoader.php')?> <!-- three dots loader --></div>

</header>