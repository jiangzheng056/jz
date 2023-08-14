<!--
 * @Author: Jz 530467341@qq.com
 * @Date: 2023-07-10 11:15:46
 * @LastEditors: Jz 530467341@qq.com
 * @LastEditTime: 2023-07-10 11:19:29
 * @FilePath: \some\app\src\views\eventDetails.vue
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
                            <h1>Event Details</h1>
                            <span><a href="index.html">Home</a><i class="bi bi-chevron-right"></i>Event Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="event-details sec-mar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="event-details-left">
                            <h2>Getting started on lis namin your event</h2>
                            <div class="sidebar-widget">
                                <div class="event-creator">
                                    <img src="../assets/img/event/event-creator.jpg" alt="image">
                                    <h4>Johan Martin SR</h4>
                                    <span>Event Creator</span>
                                    <ul class="event-social">
                                        <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                                        <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget">
                                <div class="event-info">
                                    <div class="event-info-inner">
                                        <h6>Organizer</h6>
                                        <span>Your Organizer Name</span>
                                    </div>
                                    <div class="event-info-inner">
                                        <h6>Phone :</h6>
                                        <a href="tel:022693695831">+02 2693 6958 31</a>
                                    </div>
                                    <div class="event-info-inner">
                                        <h6>Email :</h6>
                                        <a href="/cdn-cgi/l/email-protection#dfb6b1b9b0acaaafafb0adab9fb8b2beb6b3f1bcb0b2"><span
                                                class="__cf_email__"
                                                data-cfemail="6e070008011d1b1e1e011c1a2e09030f0702400d0103">[email&#160;protected]</span></a>
                                    </div>
                                    <div class="event-info-inner">
                                        <h6>Venue :</h6>
                                        <span>1 South Ave 01, Garden City, New York.</span>
                                    </div>
                                    <div class="event-info-inner">
                                        <h6>Website :</h6>
                                        <a href="www.yourwebsite.com">www.yourwebsite.com</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event-location">
                                <h4>Location Map</h4>
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe
                                            src="https://maps.google.com/maps?q=New%20scaton%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="event-details-right">
                            <div class="event-single-thumb">
                                <img src="../assets/img/event/event-single-thumb.jpg" alt="">
                                <div class="event-date-time">
                                    <span><i class="bi bi-calendar-check"></i>25 January 2022</span>
                                    <span><i class="bi bi-stopwatch"></i>12.00 to 04.00 PM</span>
                                </div>
                            </div>
                            <div class="event-details-cnt">
                                <h4>Event Description</h4>
                                <h5>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit
                                    anim id est laborum</h5>
                                <p>Gochujang ugh viral, butcher pabst put a bird on it meditation austin craft beer banh mi.
                                    Distillery ramps af, goch ujang hell of VHS kitsch austin. Vegan air plant trust fund,
                                    poke sartorial ennui next lev el photo booth coloring book etsy green juice meditation
                                    austin craft beer.</p>
                                <div class="inner-wrap">
                                    <img src="../assets/img/event/event-inner.jpg" alt="image">
                                    <b>How can have anything you ant in life if you the world msn.</b>
                                    <p>If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens
                                        (NFTs), more popularly referred to as ‘Crypto Collectibles.’ The world of NFTs is
                                        growing rapidly. It seems there is no slowing down of these assets as they continue
                                        to go up in price.</p>
                                </div>
                                <p>Sed ullamcorper nulla velit, nec auctor massa feugiat in. Curabitur eu dolor urna. Nunc
                                    accumsan tristique risus, non luctus nulla mattis vitae. Nunc facilisis lacus ipsum, ac
                                    eleifend turpis vehicula vel. Suspendisse quis lobortis velit.Helpgrove is a nonproﬁt
                                    organization supported by community leaders, corporate sponsors, churches and concerned
                                    citizens join.non luctus nulla mattis vitae. Nunc facilisis lacus ipsum, ac eleifend
                                    turpis vehicula vel. </p>
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
                                        <a href="/cdn-cgi/l/email-protection#036a6d656c43667b626e736f662d606c6e"><span
                                                class="__cf_email__"
                                                data-cfemail="563f38303916332e373b263a337835393b">[email&#160;protected]</span></a>
                                        <a href="/cdn-cgi/l/email-protection#4f3c3a3f3f203d3b0f0d2a36212b612c2022"><span
                                                class="__cf_email__"
                                                data-cfemail="f5868085859a8781b5908d9498859990db969a98">[email&#160;protected]</span></a>
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