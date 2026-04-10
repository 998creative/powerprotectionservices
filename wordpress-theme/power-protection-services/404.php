<?php
/**
 * 404 template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'ERROR';
$title = 'Page not found';
$description = 'The page you requested could not be found.';

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light">
    <div class="pps-container pps-prose">
        <p>Try returning to the homepage.</p>
        <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/')); ?>">Back to home</a>
    </div>
</section>
<?php
get_footer();
