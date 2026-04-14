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
<?php get_footer();
