<!--
 * @Author: Jz 530467341@qq.com
 * @Date: 2023-07-10 11:27:40
 * @LastEditors: Jz 530467341@qq.com
 * @LastEditTime: 2023-07-10 11:29:45
 * @FilePath: \some\app\src\views\memberDetails.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="sidebar">
            <div class="sidebar-scroll">
                <div class="cross">
                    <i class="bi bi-plus-lg"></i>
                </div>
                <div class="logo">
                    <a href="index.html"><img src="../assets/img/logo-style-2.png" alt=""></a>
                </div>
                <p>A charitable organization or charity is an organization whose primary objectives are philanthropy &
                    social well-being. The legal definition of a charitable organization varies between countries and in
                    some instances regions of the country.</p>
                <div class="instagram">
                    <h3>Instagram Post</h3>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-1.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-1.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-2.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-2.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-3.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-3.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-4.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-4.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-5.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-5.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-6.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-6.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                </div>
                <div class="our-community">
                    <h3>Join Our Community</h3>
                    <ul class="social-community">
                        <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                        <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div class="copy-right">
                    <span>Copyright 2022 <b>Diviner</b> | Design By <a
                            href="http://www.bootstrapmb.com/">bootstrapmb</a></span>
                </div>
            </div>
        </div>


        <div class="header-search">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="search-box">
                            <form action="#" method="post">
                                <label>What are you looking for ?</label>
                                <input type="text" placeholder="Anything need search here ...">
                            </form>
                            <div class="search-cross-btn">
                                <i class="bi bi-x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <header class="header-area style-1">
            <div class="main-menu">
                <div class="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                    <div class="mobile-logo-wrap ">
                        <a href="index.html"><img src="../assets/img/logo-style-2.png" alt=""></a>
                    </div>
                    <div class="menu-close-btn">
                        <i class="bi bi-x-lg"></i>
                    </div>
                </div>
                <ul class="menu-list">
                    <li class="menu-item-has-children">
                        <a href="#" class="drop-down">Home</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index2.html">Home 2</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#" class="drop-down">Campaigns</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="project.html">Project</a></li>
                            <li><a href="project-details.html">Project Details</a></li>
                            <li><a href="causes.html">Causes</a></li>
                            <li><a href="causes-details.html">Causes Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Blog</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#" class="drop-down">Pages</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="event.html">Event</a></li>
                            <li><a href="event-details.html">Event Details</a></li>
                            <li><a href="member.html">Member</a></li>
                            <li><a href="member-details.html">Member Details</a></li>
                            <li><a href="team.html">Join our Team</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="faq.html">FAQs</a></li>
                            <li><a href="error.html">Error</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>

                <div class="d-lg-none d-block">
                    <form class="mobile-menu-form">
                        <div class="input-with-btn d-flex flex-column">
                            <input type="text" placeholder="Search here...">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div class="hotline two">
                        <div class="hotline-info">
                            <span>Click To Call</span>
                            <h6><a href="tel:347-274-8816">+347-274-8816</a></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-logo">
                <a href="index.html"><img src="../assets/img/header-logo.png" alt=""></a>
            </div>
            <div class="nav-right d-flex align-items-center">
                <div class="search-btn">
                    <i class="bi bi-search"></i>
                </div>
                <div class="side-menu">
                    <a href="javascript:void(0)" class="side-btn">
                        <span class="cross-top"></span>
                        <span class="cross-middle"></span>
                        <span class="cross-bottom"></span>
                    </a>
                </div>
                <div class="hotline d-xxl-flex d-none">
                    <div class="hotline-icon">
                        <img src="../assets/img/icons/header-phone.svg" alt="">
                    </div>
                    <div class="hotline-info">
                        <span>Click To Call</span>
                        <h6><a href="tel:347-274-8816">+347-274-8816</a></h6>
                    </div>
                </div>
                <div class="eg-btn btn--primary header-btn">
                    <a class="d-flex align-items-center" href="login.html">Donate Now <img
                            src="../assets/img/icons/donate.svg" alt="download"></a>
                </div>
                <div class="mobile-menu-btn d-lg-none d-block">
                    <span>MENU</span>
                </div>
            </div>
        </header>


        <section class="breadcrumbs">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-wrapper">
                            <h1>Member Details</h1>
                            <span><a href="index.html">Home</a><i class="bi bi-chevron-right"></i>Member Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="member-details sec-mar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="member-pic">
                            <img src="../assets/img/team/member-single.jpg" alt="image">
                        </div>
                        <div class="widget-ask-form wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h4>Contact Me</h4>
                            <form action="#" method="post">
                                <label for="name">
                                    Your Name*
                                    <input type="text" name="name" id="name" placeholder="Enter Your Name:">
                                </label>
                                <label for="email">
                                    Your Email*
                                    <input type="email" name="email" id="email" placeholder="Enter Your Email:">
                                </label>
                                <label for="message">
                                    Your Message*
                                    <textarea name="message" cols="30" id="message" rows="10"
                                        placeholder="Type your question"></textarea>
                                </label>
                                <input type="submit" value="Send Now">
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="member-details-info">
                            <h3>Brooklyn Simmons</h3>
                            <span>CEO & Funder</span>
                            <p>Volunteering is a voluntary act of an individual or group freely giving time and labour for
                                community service.[1][2] Many volunteers are specifically trained in the areas they work,
                                such as medicine, education, or emergency rescue. Others serve on an as-needed basis, such
                                as in response to a natural disaster. Nowadays. I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was born and I will give you a complete
                                account of the system, and expound the actual teachings of the great explorer of the truth,
                                the master-builder of human happiness.</p>
                            <ul class="member-social">
                                <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                                <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <div class="member-skills">
                                <h4>Brooklyn Skill’s</h4>
                                <div class="skill-wrapper">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="signle-skill wow animate fadeInUp" data-wow-delay="200ms"
                                                data-wow-duration="1500ms">
                                                <div class="progress-bar-circle" data-percent="88" data-duration="1000">
                                                </div>
                                                <div class="skill-content">
                                                    <h6>Leadership</h6>
                                                    <p>Volunteering is a voluntary act of an individual.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="signle-skill wow animate fadeInUp" data-wow-delay="400ms"
                                                data-wow-duration="1500ms">
                                                <div class="progress-bar-circle" data-percent="99" data-duration="1000">
                                                </div>
                                                <div class="skill-content">
                                                    <h6>Leadership</h6>
                                                    <p>Volunteering is a voluntary act of an individual.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="signle-skill wow animate fadeInUp" data-wow-delay="600ms"
                                                data-wow-duration="1500ms">
                                                <div class="progress-bar-circle" data-percent="85" data-duration="1000">
                                                </div>
                                                <div class="skill-content">
                                                    <h6>Leadership</h6>
                                                    <p>Volunteering is a voluntary act of an individual.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="signle-skill wow animate fadeInUp" data-wow-delay="800ms"
                                                data-wow-duration="1500ms">
                                                <div class="progress-bar-circle" data-percent="60" data-duration="1000">
                                                </div>
                                                <div class="skill-content">
                                                    <h6>Leadership</h6>
                                                    <p>Volunteering is a voluntary act of an individual.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>Sed ullamcorper nulla velit, nec auctor massa feugiat in. Curabitur eu dolor urna. Nunc
                                    accumsan tristique risus, non luctus nulla mattis vitae. Nunc facilisis lacus ipsum, ac
                                    eleifend turpis vehicula vel. Suspendisse quis lobortis velit.Helpgrove is a nonproﬁt
                                    organization supported by community leaders, corporate sponsors, churches and concerned
                                    citizens join. There will be a day–in our lifetime–when we get to celebrate every person
                                    on the planet having access to clean water. Fusce bibendum elit ut varius mattis. Fusce
                                    at arcu ut nunc rhoncus dic. Nullam non metus lorem. Orci varius Nunc facilisis lacus
                                    ipsum, ac eleifend turpis vehicula vel. Suspendisse quis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="photo-gallery">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-xl-6">
                        <div class="sec-title wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h2>Photo Gallery</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium,
                                totam.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="gallery-wrapper">
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-1.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-1.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-2.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-2.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-3.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-3.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-4.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-4.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-5.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-5.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-6.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-6.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-7.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-7.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-8.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-8.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-9.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-9.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-10.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-10.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-11.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-11.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-12.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-12.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-13.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-13.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-14.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-14.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                            <div class="single-photo wow animate fadeInUp" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <img src="../assets/img/gallery/gallery-15.jpg" alt="">
                                <a class="image-popup" href="../assets/img/gallery/gallery-15.jpg"><i
                                        class="bi bi-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="join-now sec-mar">
            <div class="container">
                <div class="newsletter">
                    <div class="row align-items-center">
                        <div class="col-md-9">
                            <div class="newsletter-cnt wow animate fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <h2>Your donation today can help us root out cyclical poverty.</h2>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="joinnow-btn">
                                <a href="team.html">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <footer>
            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="index.html"><img src="../assets/img/header-logo.png" alt=""></a>
                                </div>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam.</p>
                                <div class="social-media">
                                    <ul class="footer-social">
                                        <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                                        <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-3 d-flex justify-content-md-center justify-content-start">
                            <div class="footer-widget">
                                <h4>Explore On</h4>
                                <ul class="footer-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="causes.html">Our Causes</a></li>
                                    <li><a href="team.html">Team Member</a></li>
                                    <li><a href="blog.html">Blog & News</a></li>
                                    <li><a href="event.html">Our Event</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-3 d-flex justify-content-md-center justify-content-start">
                            <div class="footer-widget">
                                <h4>Our Causes</h4>
                                <ul class="footer-menu">
                                    <li><a href="causes.html">Clean Water</a></li>
                                    <li><a href="causes.html">Medicine</a></li>
                                    <li><a href="causes.html">Blood Donation</a></li>
                                    <li><a href="causes.html">Organic Food</a></li>
                                    <li><a href="causes.html">Child Education</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <h4>Get The Updates</h4>
                                <p>Sign up to receive the best offers on promotion and coupons.</p>
                                <div class="subscribe">
                                    <form action="#" method="post">
                                        <input type="email" name="email" placeholder="Type your Email :">
                                        <input type="submit" value="Send Now">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-middle">
                <div class="container">
                    <div class="row gy-5 align-items-center">
                        <div class="col-md-12 col-lg-4 col-xl-6">
                            <div class="footer-widget">
                                <div class="contact-info">
                                    <h4>Contact Us :</h4>
                                    <div class="info">
                                        <div class="icon">
                                            <i><img src="../assets/img/icons/location.svg" alt=""></i>
                                        </div>
                                        <p>House#168/170, Road#02, Ave#01, Mirpur DOHS, Dhaka</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <div class="info">
                                    <div class="icon">
                                        <i><img src="../assets/img/icons/phone-white.svg" alt=""></i>
                                    </div>
                                    <div class="phone">
                                        <a href="tel:01760000032">+880 176 0000 032</a>
                                        <a href="tel:09256806649">+092568 06649</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <div class="info">
                                    <div class="icon">
                                        <i><img src="../assets/img/icons/envelope.svg" alt=""></i>
                                    </div>
                                    <div class="email">
                                        <a href="/cdn-cgi/l/email-protection#b6dfd8d0d9f6d3ced7dbc6dad398d5d9db"><span
                                                class="__cf_email__"
                                                data-cfemail="99f0f7fff6d9fce1f8f4e9f5fcb7faf6f4">[email&#160;protected]</span></a>
                                        <a href="/cdn-cgi/l/email-protection#5c2f292c2c332e281c1e39253238723f3331"><span
                                                class="__cf_email__"
                                                data-cfemail="7d0e080d0d120f093d18051c100d1118531e1210">[email&#160;protected]</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 col-lg-4 col-xl-5">
                            <div class="copy-txt">
                                <span>Copyright 2022 <b>Diviner</b> | Design By <a
                                        href="http://www.bootstrapmb.com/">bootstrapmb</a></span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8 col-xl-7">
                            <ul class="footer-bottom-menu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/css/style.css';
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/bootstrap-icons.css';
@import '../assets/css/all.min.css';
@import '../assets/css/fontawesome.min.css';
@import '../assets/css/swiper-bundle.min.css';
@import '../assets/css/jQuery-plugin-progressbar.css';
@import '../assets/css/magnific-popup.css';
@import '../assets/css/animate.css';
@import '../assets/css/style.css';
</style>