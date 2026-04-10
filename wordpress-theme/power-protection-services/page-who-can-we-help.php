<?php
/**
 * Who can we help parent page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Who We Help';
$title = 'Sectors we serve';
$description = 'Find dedicated sector pages for the organisations we support.';
$hero_background = 'sectors/corporate-divinetechygirl-1181406.jpg';
$hero_actions = [
    [
        'label' => 'Speak to Our Team',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'Back to Who We Help',
        'href' => home_url('/who-we-help/'),
        'primary' => false,
    ],
];
$sectors = pps_sector_data();

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light">
    <div class="pps-container">
        <div class="pps-card-grid pps-card-grid-3">
            <?php foreach ($sectors as $item) : ?>
                <article class="pps-card pps-image-card">
                    <a class="pps-image-card-media" href="<?php echo esc_url($item['href']); ?>">
                        <img src="<?php echo esc_url(pps_image_url($item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt']); ?>" />
                    </a>
                    <div class="pps-image-card-content">
                        <h3><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a></h3>
                        <p><?php echo esc_html($item['description']); ?></p>
                        <a class="pps-btn pps-btn-tertiary" href="<?php echo esc_url($item['href']); ?>">Read sector page</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php get_footer();
