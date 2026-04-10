<?php
/**
 * Theme header.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$services = pps_services_data();
$sectors  = pps_sector_data();
$support  = pps_support_data();
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="pps-header">
    <div class="pps-container pps-header-inner">
        <a class="pps-brand" href="<?php echo esc_url(home_url('/')); ?>">
            <img src="<?php echo esc_url(pps_image_url('logo.svg')); ?>" alt="Power Protection Services" />
            <span>Power Protection Services</span>
        </a>

        <button class="pps-nav-toggle" type="button" aria-expanded="false" aria-controls="pps-primary-nav">Menu</button>

        <nav id="pps-primary-nav" class="pps-nav" aria-label="Primary Navigation">
            <ul class="pps-nav-list">
                <li class="pps-nav-item pps-has-mega">
                    <button class="pps-nav-trigger" type="button" aria-expanded="false">Services</button>
                    <div class="pps-mega">
                        <div class="pps-mega-grid pps-mega-grid-3">
                            <?php foreach ($services as $item) : ?>
                                <a class="pps-mega-card" href="<?php echo esc_url($item['href']); ?>">
                                    <strong><?php echo esc_html($item['title']); ?></strong>
                                    <span><?php echo esc_html($item['description']); ?></span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </li>

                <li class="pps-nav-item pps-has-mega">
                    <button class="pps-nav-trigger" type="button" aria-expanded="false">Who We Help</button>
                    <div class="pps-mega">
                        <div class="pps-mega-grid pps-mega-grid-3">
                            <?php foreach ($sectors as $item) : ?>
                                <a class="pps-mega-card" href="<?php echo esc_url($item['href']); ?>">
                                    <strong><?php echo esc_html($item['title']); ?></strong>
                                    <span>Sector specific UPS and power continuity support.</span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </li>

                <li class="pps-nav-item pps-has-mega">
                    <button class="pps-nav-trigger" type="button" aria-expanded="false">Support</button>
                    <div class="pps-mega">
                        <div class="pps-mega-grid pps-mega-grid-4">
                            <?php foreach ($support as $item) : ?>
                                <?php if (! empty($item['disabled'])) : ?>
                                    <div class="pps-mega-card pps-disabled">
                                        <strong><?php echo esc_html($item['title']); ?></strong>
                                        <span><?php echo esc_html($item['description']); ?></span>
                                        <em>Coming soon</em>
                                    </div>
                                <?php else : ?>
                                    <a class="pps-mega-card" href="<?php echo esc_url($item['href']); ?>">
                                        <strong><?php echo esc_html($item['title']); ?></strong>
                                        <span><?php echo esc_html($item['description']); ?></span>
                                    </a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </li>

                <li class="pps-nav-item"><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a></li>
                <li class="pps-nav-item"><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a></li>
            </ul>
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Book a Free Site Survey</a>
        </nav>
    </div>
</header>
<main class="pps-main">
