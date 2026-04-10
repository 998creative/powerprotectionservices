<?php
/**
 * About page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'About Us';
$title = 'Independent advice across major manufacturers';
$description = 'We provide independent UPS specification, installation and long-term support based on fit, not vendor bias.';
$hero_background = 'hero/about-carl-lindy-team-photo.jpg';
$hero_actions = [
    [
        'label' => 'Contact Us',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'Our Services',
        'href' => home_url('/services/'),
        'primary' => false,
    ],
];

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light">
    <div class="pps-container pps-prose">
        <p class="pps-eyebrow">What We Do</p>
        <h2>Independent technical delivery and support</h2>
        <p>From site survey through to commissioning and aftercare, we deliver practical power protection support for organisations across the UK.</p>
        <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
    </div>
</section>
<?php get_footer();
