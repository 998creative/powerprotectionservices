<?php
/**
 * Support page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Support';
$title = 'Support & Aftercare Services';
$description = 'Ongoing technical support for UPS and standby power systems, from day-to-day troubleshooting to long-term maintenance planning.';
$hero_background = 'hero/services-maintenance.jpg';
$hero_actions = [
    [
        'label' => 'Call 01488 685207',
        'href' => 'tel:01488685207',
        'primary' => true,
    ],
    [
        'label' => 'Contact Support',
        'href' => home_url('/contact/#contact'),
        'primary' => false,
    ],
];

$support_cards = pps_support_cards_data();
$warranty_points = [
    'Extended warranty options are available on selected models, with cover up to five years.',
    'Standard UK warranty typically covers non-consumable parts and labour when systems are operated within published guidelines.',
    'Batteries are consumable items and are normally covered by a one-year manufacturer warranty.',
];

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light">
    <div class="pps-container pps-two-col pps-support-panels">
        <article class="pps-panel">
            <h2>Technical support you can actually reach</h2>
            <p>Our team works closely with manufacturers and combines practical field experience with product-level support to help you resolve issues quickly and keep critical systems running.</p>
            <p>We focus on long-term reliability, not one-off fixes. After installation and commissioning, we stay involved with proactive service and responsive guidance whenever you need us.</p>
        </article>

        <article class="pps-panel">
            <p class="pps-eyebrow">Warranties</p>
            <h2>Clear warranty support</h2>
            <ul class="pps-bullets">
                <?php foreach ($warranty_points as $point) : ?>
                    <li><?php echo esc_html($point); ?></li>
                <?php endforeach; ?>
            </ul>
        </article>
    </div>
</section>

<section class="pps-section pps-section-light pps-section-muted">
    <div class="pps-container">
        <p class="pps-eyebrow">Aftercare Services</p>
        <h2>What our support includes</h2>
        <div class="pps-card-grid pps-card-grid-3 pps-equal-cards">
            <?php foreach ($support_cards as $item) : ?>
                <article class="pps-card pps-support-card">
                    <h3><?php echo esc_html($item['title']); ?></h3>
                    <p><?php echo esc_html($item['description']); ?></p>
                    <ul class="pps-inline-bullets">
                        <?php foreach ($item['bullets'] as $bullet) : ?>
                            <li><?php echo esc_html($bullet); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="pps-section pps-section-dark">
    <div class="pps-container pps-cta-block pps-cta-block-dark">
        <div>
            <h2>Need immediate support?</h2>
            <p>Tell us what system you have in place and what issue you are seeing. We will help you plan the right next step quickly.</p>
        </div>
        <div class="pps-cta-buttons">
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Request Support</a>
            <a class="pps-btn pps-btn-secondary" href="tel:01488685207">01488 685207</a>
        </div>
    </div>
</section>
<?php get_footer();
