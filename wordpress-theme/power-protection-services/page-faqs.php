<?php
/**
 * FAQs page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Support';
$title = 'Frequently Asked Questions';
$description = 'Quick answers on support, manuals, maintenance, and UPS services.';
$hero_background = 'hero/hero-datacenter-brett-4508751.jpg';
$hero_actions = [
    [
        'label' => 'Support & Aftercare Services',
        'href' => home_url('/support/'),
        'primary' => true,
    ],
    [
        'label' => 'Browse Manuals',
        'href' => home_url('/manuals/'),
        'primary' => false,
    ],
];
$faq_items = pps_faq_items_data();

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
        <p class="pps-eyebrow">FAQs</p>
        <h2>Common questions</h2>
        <div class="pps-faq-list">
            <?php foreach ($faq_items as $item) : ?>
                <details class="pps-faq-item">
                    <summary>
                        <span><?php echo esc_html($item['question']); ?></span>
                        <span class="pps-faq-plus" aria-hidden="true">+</span>
                    </summary>
                    <p><?php echo esc_html($item['answer']); ?></p>
                </details>
            <?php endforeach; ?>
        </div>
        <div class="pps-prose">
            <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
        </div>
    </div>
</section>
<section class="pps-about-cta-strip">
    <div class="pps-container pps-about-cta-strip-inner">
        <div>
            <h2>Let&apos;s plan the right solution for your site.</h2>
            <p>Get in touch for free, unbiased professional advice on UPS and critical power infrastructure.</p>
        </div>
        <div class="pps-cta-buttons">
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Contact Us</a>
            <a class="pps-btn pps-btn-secondary pps-btn--icon pps-btn--icon-left" href="tel:01488685207">
                <span class="pps-btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z" stroke-width="1.8" stroke-linejoin="round" />
                    </svg>
                </span>
                01488 685207
            </a>
        </div>
    </div>
</section>
<?php get_footer();
