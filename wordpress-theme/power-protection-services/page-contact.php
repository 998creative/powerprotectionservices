<?php
/**
 * Contact page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Contact';
$title = 'Get in touch';
$description = 'Tell us about your requirements and our team will respond quickly with practical advice.';
$hero_background = 'hero/hero-datacenter-brett-4508751.jpg';
$hero_actions = [
    [
        'label' => 'Call 01488 685207',
        'href' => 'tel:01488685207',
        'primary' => true,
    ],
    [
        'label' => 'Email Us',
        'href' => 'mailto:contact@powerprotectionservices.co.uk',
        'primary' => false,
    ],
];

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light" id="contact">
    <div class="pps-container pps-two-col pps-contact-grid">
        <div class="pps-prose">
            <h2>Direct contact</h2>
            <p>Email: <a href="mailto:contact@powerprotectionservices.co.uk">contact@powerprotectionservices.co.uk</a></p>
            <p>Phone: <a href="tel:01488685207">01488 685207</a></p>
            <p>Power Protection Services Ltd<br />Unit 2 Neates Yard<br />Hungerford<br />Berkshire RG17 0NB</p>
        </div>
        <div class="pps-panel">
            <h3>Contact form</h3>
            <p>Use this area for your preferred form embed (core form block, custom HTML form, or your final in-house flow).</p>
            <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
        </div>
    </div>
</section>
<?php get_footer();
