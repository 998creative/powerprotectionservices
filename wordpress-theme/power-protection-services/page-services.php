<?php
/**
 * Services archive-style page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Services';
$title = 'UPS and power protection services';
$description = 'Explore our service areas across survey, installation, relocation and support.';
$hero_background = 'hero/hero-datacenter-brett-4508751.jpg';
$hero_actions = [
    [
        'label' => 'Book a Free Site Survey',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'Call 01488 685207',
        'href' => 'tel:01488685207',
        'primary' => false,
    ],
];
$services = pps_services_data();

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
    <div class="pps-container">
        <div class="pps-card-grid pps-card-grid-3">
            <?php foreach ($services as $item) : ?>
                <article class="pps-card pps-image-card">
                    <a class="pps-image-card-media" href="<?php echo esc_url($item['href']); ?>">
                        <img src="<?php echo esc_url(pps_image_url($item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt']); ?>" />
                    </a>
                    <div class="pps-image-card-content">
                        <h3>
                            <a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a>
                        </h3>
                        <p><?php echo esc_html($item['description']); ?></p>
                        <ul class="pps-inline-bullets">
                            <?php foreach ($item['highlights'] as $highlight) : ?>
                                <li><?php echo esc_html($highlight); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <a class="pps-btn pps-btn-tertiary" href="<?php echo esc_url($item['href']); ?>">Find out more</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
        <div class="pps-prose">
            <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
        </div>
    </div>
</section>
<?php get_footer();
