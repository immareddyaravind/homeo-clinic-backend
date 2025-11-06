<?php

use App\Http\Controllers\HomeBannerController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\AppointmentController;

Route::get('/home-banners', [HomeBannerController::class, 'show']);
Route::get('/doctors', [DoctorController::class, 'show']);
// API routes
Route::post('/book-online', [AppointmentController::class, 'bookOnline']);
// use App\Http\Controllers\AboutOverviewController;
// use App\Http\Controllers\ContactUsController;
// use App\Http\Controllers\CounterController;
// use App\Http\Controllers\HomeAboutController;

// use App\Http\Controllers\HomeContactController;
// use App\Http\Controllers\HomeProductController;
// use App\Http\Controllers\ProductController;
// use App\Http\Controllers\ProductBannerController;

// // ******************************************* Alamgir API Starts ***********************************>
// // ------------------------------ Common sections start -----------------------
// use App\Http\Controllers\PagesBannerController;
// use App\Http\Controllers\SearchMenuController;
// // ------------------------------ Common sections end -----------------------

// // ------------------------------ Media sections start -----------------------
// use App\Http\Controllers\PressReleaseController;
// use App\Http\Controllers\NewsUpdateController;
// use App\Http\Controllers\BlogController;
// // ------------------------------ Media sections end -----------------------

// // ------------------------------ Portfolio sections start -----------------------
// use App\Http\Controllers\PortfolioOverviewController;
// use App\Http\Controllers\KeyTherapeuticAreasController;
// // ------------------------------ Portfolio sections end -----------------------

// // ------------------------------ Investors sections start -----------------------
// use App\Http\Controllers\PromoterController;
// use App\Http\Controllers\ReportsPolicyController;
// // ------------------------------ Investors sections end -----------------------

// // ------------------------------ About Us sections start -----------------------
// use App\Http\Controllers\DirectorController;
// use App\Http\Controllers\ManagementTeamController;
// // ------------------------------ About Us sections end -----------------------

// // ------------------------------ Career Application forms sections start -----------------------
// use App\Http\Controllers\CareerApplicationController;
// // ------------------------------ Career Application forms sections end -----------------------

// // ------------------------------ Career Opportunities sections start -----------------------
// use App\Http\Controllers\CareerOpportunityController;
// // ------------------------------ Career Opportunities sections end -----------------------

// use App\Models\Product;

// /*
// |--------------------------------------------------------------------------
// | API Routes
// |--------------------------------------------------------------------------
// |
// | Here is where you can register API routes for your application. These
// | routes are loaded by the RouteServiceProvider and all of them will
// | be assigned to the "api" middleware group. Make something great!
// |
// */

// Route::get('/home-banners', [AboutBannerController::class, 'show']);
// Route::get('/about-overview', [AboutOverviewController::class, 'show']);
// Route::get('/contactus', [ContactUsController::class, 'show']);
// Route::get('/counters', [CounterController::class, 'show']);
// Route::get('/home-about', [HomeAboutController::class, 'show']);
// Route::get('/home-banner', [HomeBannerController::class, 'show']);
// Route::get('/home-contact', [HomeContactController::class, 'show']);
// Route::get('/home-product', [HomeProductController::class, 'show']);
// Route::get('/products', [ProductController::class, 'show']);
// Route::get('/products/{id}', [ProductController::class, 'showProductDetails']);
// Route::get('/product-banner', [ProductBannerController::class, 'show']);
// // Route::get('/products/names', [ProductController::class, 'getProductNames']);

// // ------------------------------ Common sections start -----------------------
// Route::get('/banner/{pageName}', [PagesBannerController::class, 'getBannerByPage']);
// Route::get('/search-menu', [SearchMenuController::class, 'show']);
// // ------------------------------ Common sections end -----------------------

// // ------------------------------ Media sections start -----------------------
// Route::get('/press-release', [PressReleaseController::class, 'show']);
// Route::get('/news-and-updates', [NewsUpdateController::class, 'show']);
// Route::get('/blogs', [BlogController::class, 'show']);
// Route::get('/blog-detail/{slug}', [BlogController::class, 'getBlogDetailsByTitleSlug']);
// // ------------------------------ Media sections end -----------------------

// // ------------------------------ Portfolio sections start -----------------------
// Route::get('/portfolio-overview', [PortfolioOverviewController::class, 'show']);
// Route::get('/key-therapeutic-areas', [KeyTherapeuticAreasController::class, 'show']);
// // ------------------------------ Portfolio sections end -----------------------

// // ------------------------------ Investers sections start -----------------------
// Route::get('/promoters', [PromoterController::class, 'show']);
// Route::get('/reports-policies', [ReportsPolicyController::class, 'show']);
// // ------------------------------ Investers sections end -----------------------

// // ------------------------------ About Us sections start -----------------------
// Route::get('/directors', [DirectorController::class, 'show']);
// Route::get('/management-team', [ManagementTeamController::class, 'show']);
// // ------------------------------ About Us sections end -----------------------


// // ------------------------------ Career Application forms sections start -----------------------
// //Route::get('/career-application', [CareerApplicarionController::class, 'show']);
// Route::post('/career-application', [CareerApplicationController::class, 'store']);
// // ------------------------------ Career Application forms sections end -----------------------

// // ------------------------------ Career Opportunities sections start -----------------------
// Route::get('/career-opportunities', [CareerOpportunityController::class, 'show']);
// // ------------------------------ Career Opportunities sections end -----------------------


// // Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
// //     return $request->user();
// // });
