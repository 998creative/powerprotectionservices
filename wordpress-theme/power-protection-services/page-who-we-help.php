<?php
/**
 * Who we help page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Who We Help';
$title = 'Who we help across the UK';
$description = 'We support healthcare, education, government and local council, coorporate organisations, IT partners and SMEs with independent UPS and backup power services.';
$hero_background = 'sectors/corporate-divinetechygirl-1181406.jpg';
$hero_actions = [
    [
        'label' => 'Speak to Our Team',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'View Services',
        'href' => home_url('/services/'),
        'primary' => false,
    ],
];
$sectors = pps_sector_data();

$coverage_examples = [
    ['region' => 'South East', 'examples' => 'Hungerford, Newbury, Reading, Oxford, Swindon'],
    ['region' => 'London & Home Counties', 'examples' => 'Greater London, Surrey, Berkshire, Hampshire'],
    ['region' => 'Midlands & South West', 'examples' => 'Birmingham, Bristol and surrounding areas'],
    ['region' => 'North, Scotland & Wales', 'examples' => 'Manchester, Leeds, Liverpool, Glasgow, Edinburgh, Cardiff'],
];

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light">
    <div class="pps-container">
        <p class="pps-eyebrow">Sectors We Serve</p>
        <h2>Business sectors we support</h2>
        <p class="pps-section-intro">We tailor recommendations by sector, so each organisation gets the right balance of resilience, compliance, scalability and long-term support.</p>
        <div class="pps-card-grid pps-card-grid-3">
            <?php foreach ($sectors as $item) : ?>
                <article class="pps-card pps-image-card pps-image-card-tall">
                    <a class="pps-image-card-media" href="<?php echo esc_url($item['href']); ?>">
                        <img src="<?php echo esc_url(pps_image_url($item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt']); ?>" />
                    </a>
                    <div class="pps-image-card-content">
                        <h3><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a></h3>
                        <p><?php echo esc_html($item['description']); ?></p>
                        <p class="pps-mini-heading">Typical needs</p>
                        <ul class="pps-inline-bullets">
                            <?php foreach ($item['highlights'] as $highlight) : ?>
                                <li><?php echo esc_html($highlight); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <a class="pps-btn pps-btn-tertiary" href="<?php echo esc_url($item['href']); ?>">Learn More</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="pps-section pps-section-light pps-section-muted">
    <div class="pps-container pps-two-col pps-coverage-grid">
        <div class="pps-prose">
            <p class="pps-eyebrow">UK Coverage</p>
            <h2>Where do we cover?</h2>
            <p>We cover most of the UK. Based in Hungerford, Berkshire, we regularly support sites locally and nationwide for UPS installation, maintenance, battery replacement and wider power protection projects.</p>
            <p>If your town or region is not listed below, we can still help. Share your location and we will confirm coverage quickly.</p>
        </div>
        <aside class="pps-panel">
            <h3>Example areas we regularly support</h3>
            <ul class="pps-coverage-list">
                <?php foreach ($coverage_examples as $area) : ?>
                    <li>
                        <strong><?php echo esc_html($area['region']); ?></strong>
                        <span><?php echo esc_html($area['examples']); ?></span>
                    </li>
                <?php endforeach; ?>
            </ul>
        </aside>
    </div>
</section>
<?php get_footer();
