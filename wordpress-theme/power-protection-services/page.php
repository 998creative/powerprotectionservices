<?php
/**
 * Default page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Page';
$title = pps_page_heading('Page');
$description = get_the_excerpt() ?: 'Content for this page can be added in WordPress admin.';
$hero_background = 'hero/hero-datacenter-brett-4508751.jpg';

get_header();
get_template_part('partials/hero', null, [
    'eyebrow' => $eyebrow ?? '',
    'title' => $title ?? '',
    'description' => $description ?? '',
    'hero_background' => $hero_background ?? '',
    'hero_actions' => $hero_actions ?? [],
]);
?>
<section class="pps-section pps-section-light">
    <div class="pps-container pps-prose">
        <?php
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
        ?>
    </div>
</section>
<?php get_footer();
