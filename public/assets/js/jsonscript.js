
$(document).ready(function () {

	// Categories List

	if($('#categorieslist').length > 0) {
		$('#categorieslist').DataTable({
			"bFilter": false,
			"bInfo": false,
			"ordering": true,
			"autoWidth": true,
			"language": {
				search: ' ',
				sLengthMenu: '_MENU_',
				searchPlaceholder: "Search",
				info: "_START_ - _END_ of _TOTAL_ items",
				"lengthMenu": "Show _MENU_ entries",
				paginate: {
					next: 'Next <i class=" fa fa-angle-right"></i> ',
					previous: '<i class="fa fa-angle-left"></i> Prev '
				},
			},
			initComplete: function(settings, json) {
				$('.dataTables_paginate').appendTo('.datatable-paginate');
				$('.dataTables_length').appendTo('.datatable-length');
			},
			"data":[
				{
					"id" : 1,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Darlee Robertson",
					"customer_image" : "assets/img/profiles/avatar-19.jpg",
					"customer_no" : "Facility Manager",
					"phone" : "1234567890",
					"email" : "robertson@example.com",
					"location" : "Germany",
					"tag" : "0",
					"rating" : "4.2",
					"owner" : "Hendry Milner",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 2,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Sharon Roy",
					"customer_image" : "assets/img/profiles/avatar-20.jpg",
					"customer_no" : "Installer",
					"phone" : "+1 989757485",
					"email" : "sharon@example.com",
					"location" : "USA",
					"tag" : "2",
					"rating" : "5.0",
					"owner" : "Guilory Berggren",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "1",
					"Action" : ""
				},
				{
					"id" : 3,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Vaughan Lewis",
					"customer_image" : "assets/img/profiles/avatar-21.jpg",
					"customer_no" : "Senior  Manager",
					"phone" : "+1 546555455",
					"email" : "vaughan12@example.com",
					"location" : "Canada",
					"tag" : "0",
					"rating" : "3.5",
					"owner" : "Jami Carlile",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 4,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Jessica Louise",
					"customer_image" : "assets/img/profiles/avatar-23.jpg",
					"customer_no" : "Test Engineer",
					"phone" : "+1 454478787",
					"email" : "jessica13@example.com",
					"location" : "India",
					"tag" : "1",
					"rating" : "4.5",
					"owner" : "Theresa Nelson",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 5,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Carol Thomas",
					"customer_image" : "assets/img/profiles/avatar-16.jpg",
					"customer_no" : "UI /UX Designer",
					"phone" : "+1 124547845",
					"email" : "caroltho3@example.com",
					"location" : "China",
					"tag" : "0",
					"rating" : "4.7",
					"owner" : "Smith Cooper",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 6,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Dawn Mercha",
					"customer_image" : "assets/img/profiles/avatar-22.jpg",
					"customer_no" : "Technician",
					"phone" : "+1 478845447",
					"email" : "dawnmercha@example.com",
					"location" : "Martin Lewis",
					"tag" : "1",
					"rating" : "5.0",
					"owner" : "Martin Lewis",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 7,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Rachel Hampton",
					"customer_image" : "assets/img/profiles/avatar-24.jpg",
					"customer_no" : "Software Developer",
					"phone" : "+1 215544845",
					"email" : "rachel@example.com",
					"location" : "Indonesia",
					"tag" : "2",
					"rating" : "3.1",
					"owner" : "Newell Egan",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 8,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Jonelle Curtiss",
					"customer_image" : "assets/img/profiles/avatar-25.jpg",
					"customer_no" : "Supervisor",
					"phone" : "+1 121145471",
					"email" : "jonelle@example.com",
					"location" : "Cuba",
					"tag" : "1",
					"rating" : "5.0",
					"owner" : "Janet Carlson",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 9,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Jonathan Smith",
					"customer_image" : "assets/img/profiles/avatar-26.jpg",
					"customer_no" : "Team Lead Dev",
					"phone" : "+1 321454789",
					"email" : "jonathan@example.com",
					"location" : "Isreal",
					"tag" : "0",
					"rating" : "2.7",
					"owner" : "Craig Brown",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				}
				,
				{
					"id" : 10,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Brook Carter",
					"customer_image" : "assets/img/profiles/avatar-01.jpg",
					"customer_no" : "Team Lead Dev ",
					"phone" : "+1 278907145",
					"email" : "brook@example.com",
					"location" : "Colombia",
					"tag" : "2",
					"rating" : "3.0",
					"owner" : "Daniel Byrne",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				}
				,
				{
					"id" : 11,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Eric Adams",
					"customer_image" : "assets/img/profiles/avatar-06.jpg",
					"customer_no" : "HR Manager",
					"phone" : "+1 19023-78104",
					"email" : "ericadams@example.com",
					"location" : "France",
					"tag" : "1",
					"rating" : "3.0",
					"owner" : "Daniel Byrne",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				}
				,
				{
					"id" : 12,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Richard Cooper",
					"customer_image" : "assets/img/profiles/avatar-05.jpg",
					"customer_no" : "Devops Engineer",
					"phone" : "+1 18902-63904",
					"email" : "richard@example.com",
					"location" : "Belgium",
					"tag" : "1",
					"rating" : "3.0",
					"owner" : "Daniel Byrne",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
					"status" : "0",
					"Action" : ""
				}
				
			],
			"columns": [
				{
					"render": function (data, type, row) {
						return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
					}
				},
				{
					"render": function (data, type, row) {
						return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
					}
				},
				{
					"render": function (data, type, row) {
						return '<h2 class="d-flex align-items-center"><a href="contact-details.html" class="avatar avatar-sm me-2"><img class="img-fluid" src="' + row['customer_image'] + '" alt="User Image"></a><a href="contact-details.html" class="d-flex flex-column">' + row['customer_name'] + ' <span class="text-default">' + row['customer_no'] + ' </span></a></h2>';
					}
				},
				{ "data": "phone" },
				{ "data": "email" },
				{
					"render": function (data, type, row) {
						var class_name, status_name;
						if (row['tag'] == "0") {
							class_name = "badge-success-light";
							status_name = "Collab";
						} else if (row['tag'] == "1") {
							class_name = "badge-warning-light";
							status_name = "Rated";
						} else {
							class_name = "badge-purple-light";
							status_name = "Promotion";
						}
						return '<span class="badge badge-tag ' + class_name + '" >' + status_name + '</span>';
					}
				},
				{ "data": "location" },
				{
					"render": function (data, type, row) {
						return '<div class="set-star"><span><i class="fa fa-star filled"></i> ' + row['rating'] + ' </span></div>';
					}
				},
				{ "data": "owner" },
				{
					"render": function (data, type, row) {
						return '<ul class="social-links d-flex align-items-center"><li><a href="#"><i class="ti ti-mail"></i></a></li><li><a href="#"><i class="ti ti-phone-check"></i></a></li><li><a href="#"><i class="ti ti-message-circle-share"></i></a></li><li><a href="#"><i class="ti ti-brand-skype"></i></a></li><li><a href="#"><i class="ti ti-brand-facebook "></i></a></li></ul>';
					}
				},
				{
					"render": function (data, type, row) {
							if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
				return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
					}
				}, 
				{
					"render": function (data, type, row) {
						return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="contact-details.html"><i class="ti ti-eye text-blue-light"></i> Preview</a></div></div>';
					}
				}
			]
		});
		
	}

    // Companies List

	if($('#companieslist').length > 0) {
		$('#companieslist').DataTable({
				"bFilter": false, 
				"bInfo": false,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
				 },
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},	
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"company_name" : "NovaWave LLC",
						"company_image" : "assets/img/icons/company-icon-01.svg",
						"phone" : "+1 875455453",
						"email" : "robertson@example.com",
						"location" : "Germany",
						"tag" : "0",
						"rating" : "4.2",
						"owner" : "Hendry Milner",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Paid Social",
						"won_deals": "5 Deals, $100000",
						"lost_deals": "2 Deals, $80000",
						"created_date": "25 Sep 2023, 01:22 pm"
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"company_name" : "BlueSky Industries",
						"company_image" : "assets/img/icons/company-icon-02.svg",
						"phone" : "+1 989757485",
						"email" : "sharon@example.com",
						"location" : "USA",
						"tag" : "0",
						"rating" : "5.0",
						"owner" : "Guilory Berggren",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "1",
						"Action" : "",
						"source": "Referrals",
						"won_deals": "4 Deals, $120000",
						"lost_deals": "3 Deals, $90000",
						"created_date": "29 Sep 2023, 04:15 pm"
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"company_name" : "SilverHawk",
						"company_image" : "assets/img/icons/company-icon-03.svg",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"location" : "Canada",
						"tag" : "0",
						"rating" : "3.5",
						"owner" : "Jami Carlile",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Campaigns",
						"won_deals": "3 Deals, $110000",
						"lost_deals": "2 Deals, $70000",
						"created_date": "04 Oct 2023, 10:18 am"
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"company_name" : "SummitPeak",
						"company_image" : "assets/img/icons/company-icon-04.svg",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"location" : "India",
						"tag" : "0",
						"rating" : "4.5",
						"owner" : "Theresa Nelson",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Google",
						"won_deals": "6 Deals, $200000",
						"lost_deals": "3 Deals, $100000",
						"created_date": "17 Oct 2023, 03:31 pm"
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"company_name" : "RiverStone Ventur",
						"company_image" : "assets/img/icons/company-icon-05.svg",
						"phone" : "+1 124547845",
						"email" : "caroltho3@example.com",
						"location" : "China",
						"tag" : "0",
						"rating" : "4.7",
						"owner" : "Smith Cooper",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Paid Social",
						"won_deals": "3 Deals, $80000",
						"lost_deals": "1 Deal, $40000",
						"created_date": "24 Oct 2023, 09:14 pm"
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"company_name" : "Bright Bridge Grp",
						"company_image" : "assets/img/icons/company-icon-06.svg",
						"phone" : "+1 478845447",
						"email" : "dawnmercha@example.com",
						"location" : "Martin Lewis",
						"tag" : "0",
						"rating" : "5.0",
						"owner" : "Martin Lewis",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Referrals",
						"won_deals": "5 Deals, $95000",
						"lost_deals": "2 Deals, $60000",
						"created_date": "08 Nov 2023, 09:56 am"
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"company_name" : "CoastalStar Co.",
						"company_image" : "assets/img/icons/company-icon-07.svg",
						"phone" : "+1 215544845",
						"email" : "rachel@example.com",
						"location" : "Indonesia",
						"tag" : "0",
						"rating" : "3.1",
						"owner" : "Newell Egan",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Campaigns",
						"won_deals": "4 Deals, $100000",
						"lost_deals": "1 Deal, $50000",
						"created_date": "14 Nov 2023, 04:19 pm"
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"company_name" : "HarborView",
						"company_image" : "assets/img/icons/company-icon-08.svg",
						"phone" : "+1 121145471",
						"email" : "jonelle@example.com",
						"location" : "Cuba",
						"tag" : "2",
						"rating" : "5.0",
						"owner" : "Janet Carlson",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Google",
						"won_deals": "3 Deals, $70000",
						"lost_deals": "3 Deals, $80000",
						"created_date": "23 Nov 2023, 11:14 pm"
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"company_name" : "Golden Gate Ltd",
						"company_image" : "assets/img/icons/company-icon-09.svg",
						"phone" : "+1 321454789",
						"email" : "jonathan@example.com",
						"location" : "Isreal",
						"tag" : "2",
						"rating" : "2.7",
						"owner" : "Craig Brown",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Referrals",
						"won_deals": "6 Deals, $130000",
						"lost_deals": "4 Deals, $100000",
						"created_date": "10 Dec 2023, 06:43 am"
					},
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"company_name" : "Redwood Inc",
						"company_image" : "assets/img/icons/company-icon-10.svg",
						"phone" : "+1 278907145",
						"email" : "brook@example.com",
						"location" : "Colombia",
						"tag" : "2",
						"rating" : "3.0",
						"owner" : "Daniel Byrne",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Campaigns",
						"won_deals": "5 Deals, $90000",
						"lost_deals": "2 Deals, $55000",
						"created_date": "25 Dec 2023, 08:17 pm"
					},
					{
						"id" : 11,
						"si_no" : "",
						"select" : "",
						"company_name" : "SilverHawk",
						"company_image" : "assets/img/icons/company-icon-03.svg",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"location" : "Canada",
						"tag" : "0",
						"rating" : "3.5",
						"owner" : "Jami Carlile",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Paid Social",
						"won_deals": "5 Deals, $100000",
						"lost_deals": "2 Deals, $80000",
						"created_date": "25 Sep 2023, 01:22 pm"
					},
					{
						"id" : 12,
						"si_no" : "",
						"select" : "",
						"company_name" : "SummitPeak",
						"company_image" : "assets/img/icons/company-icon-04.svg",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"location" : "India",
						"tag" : "0",
						"rating" : "4.5",
						"owner" : "Theresa Nelson",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Google",
						"won_deals": "3 Deals, $70000",
						"lost_deals": "3 Deals, $80000",
						"created_date": "23 Nov 2023, 11:14 pm"
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border rounded p-1 me-2"><img class="w-auto h-auto" src="'+row['company_image']+'" alt="User Image"></a><a href="company-details.html" class="d-flex flex-column fw-medium">'+row['company_name']+'</a></h2>';
				}},
				{ "data": "phone" },
				{ "data": "email" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "badge-success-light";var status_name ="Collab" } if(row['status'] == "1") { var class_name = "badge-warning-light";var status_name ="Rated" }else { var class_name = "badge-purple-light";var status_name ="Promotion"}
					return '<span class="badge badge-tag '+class_name+'" >'+status_name+'</span>';
				}},
				{ "data": "location" },
				{ "render": function ( data, type, row ){
					return '<div class="set-star"><span><i class="fa fa-star filled"></i> '+row['rating']+' </span></div>' ;
				}},
				{ "data": "owner" },
				{ "render": function ( data, type, row ){
					return '<ul class="social-links d-flex align-items-center"><li><a href="#"><i class="ti ti-mail"></i></a></li><li><a href="#"><i class="ti ti-phone-check"></i></a></li><li><a href="#"><i class="ti ti-message-circle-share"></i></a></li><li><a href="#"><i class="ti ti-brand-skype"></i></a></li><li><a href="#"><i class="ti ti-brand-facebook "></i></a></li></ul>';
				}},
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="company-details.html"><i class="ti ti-eye text-blue-light"></i> Preview</a></div></div>';
				}}
			]
		});
	}

	// Leads List

	if($('#leads_list').length > 0) {
		$('#leads_list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},	
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Collins",
						"company_name" : "NovaWave LLC",
						"company_image" : "assets/img/icons/company-icon-01.svg",
						"company_address" : "Newyork, USA",
						"phone" : "+1 875455453",
						"email" : "robertson@example.com",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"owner" : "Hendry Milner",
						"source" : "Paid Social",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Konopelski",
						"company_name" : "BlueSky Industries",
						"company_image" : "assets/img/icons/company-icon-02.svg",
						"company_address" : "Winchester, KY",
						"phone" : "+1 989757485",
						"email" : "sharon@example.com",
						"created_date" : "29 Sep 2023, 04:15 pm",
						"owner" : "Guilory Berggren",
						"source" : "Referrals",
						"status" : "2",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Adams",
						"company_name" : "SilverHawk",
						"company_image" : "assets/img/icons/company-icon-03.svg",
						"company_address" : "Jametown, NY",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"created_date" : "04 Oct 2023, 10:18 am",
						"owner" : "Jami Carlile",
						"source" : "Campaigns",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Schumm",
						"company_name" : "SummitPeak",
						"company_image" : "assets/img/icons/company-icon-04.svg",
						"company_address" : "Compton, RI",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"created_date" : "17 Oct 2023, 03:31 pm",
						"owner" : "Theresa Nelson",
						"source" : "Google",
						"status" : "3",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Wisozk",
						"company_name" : "RiverStone Ventur",
						"company_image" : "assets/img/icons/company-icon-05.svg",
						"company_address" : "Dayton, OH",
						"phone" : "+1 124547845",
						"email" : "caroltho3@example.com",
						"created_date" : "24 Oct 2023, 09:14 pm",
						"owner" : "Smith Cooper",
						"source" : "Paid Social",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Heller",
						"company_name" : "Bright Bridge Grp",
						"company_image" : "assets/img/icons/company-icon-06.svg",
						"company_address" : "Lafayette, LA",
						"phone" : "+1 478845447",
						"email" : "dawnmercha@example.com",
						"created_date" : "08 Nov 2023, 09:56 am",
						"owner" : "Martin Lewis",
						"source" : "Referrals",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Gutkowski",
						"company_name" : "CoastalStar Co.",
						"company_image" : "assets/img/icons/company-icon-07.svg",
						"company_address" : "Centerville, VA",
						"phone" : "+1 215544845",
						"email" : "rachel@example.com",
						"created_date" : "14 Nov 2023, 04:19 pm",
						"owner" : "Newell Egan",
						"source" : "Campaigns",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Walter",
						"company_name" : "HarborView",
						"company_image" : "assets/img/icons/company-icon-08.svg",
						"company_address" : "Providence, RI",
						"phone" : "+1 121145471",
						"email" : "jonelle@example.com",
						"created_date" : "23 Nov 2023, 11:14 pm",
						"owner" : "Janet Carlson",
						"source" : "Google",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Hansen",
						"company_name" : "Golden Gate Ltd",
						"company_image" : "assets/img/icons/company-icon-09.svg",
						"company_address" : "Swayzee, IN",
						"phone" : "+1 321454789",
						"email" : "jonathan@example.com",
						"created_date" : "10 Dec 2023, 06:43 am",
						"owner" : "Craig Brown",
						"source" : "Paid Social",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Leuschke",
						"company_name" : "Redwood Inc",
						"company_image" : "assets/img/icons/company-icon-10.svg",
						"company_address" : "Florida City, FL",
						"phone" : "+1 278907145",
						"email" : "brook@example.com",
						"created_date" : "25 Dec 2023, 08:17 pm",
						"owner" : "Daniel Byrne",
						"source" : "Referrals",
						"status" : "1",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="leads-details.html" class="title-name">'+row['lead_name']+'</a>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border rounded p-1 me-2"><img class="w-auto h-auto" src="'+row['company_image']+'" alt="User Image"></a><a href="company-details.html" class="d-flex flex-column">'+row['company_name']+'<span class="text-default">'+row['company_address']+' </span></a></h2>';
				}},
				{ "data": "phone" },
				{ "data": "email" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Closed" } else if(row['status'] == "1") { var class_name = "bg-danger";var status_name ="Lost" } else if(row['status'] == "2") { var class_name = "bg-pending";var status_name ="Not Contacted"}
					else { var class_name = "bg-warning";var status_name ="Contacted"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['owner']+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_lead"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="#"><i class="ti ti-clipboard-copy text-blue-light"></i> Clone</a></div></div>';
				}}
			]
		});
	}
		
	// Faq List

	if($('#faqlist').length > 0) {
		$('#faqlist').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data": [
					{
						"id": 1,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Services",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "25 Sep 2023, 01:22 pm",
						"status": "1",
						"Action": ""
					},
					{
						"id": 2,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Advertising",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "29 Sep 2023, 08:12 am",
						"status": "1",
						"Action": ""
					},
					{
						"id": 3,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Services",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "02 Oct 2023, 02:32 pm",
						"status": "1",
						"Action": ""
					},
					{
						"id": 4,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Services",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "11 Oct 2023, 02:32 pm",
						"status": "1",
						"Action": ""
					},
					{
						"id": 5,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Media",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "04 Nov 2023, 04:22 pm",
						"status": "1",
						"Action": ""
					},
					{
						"id": 6,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Content Marketing",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "16 Nov 2023, 10:51 pm",
						"status": "1",
						"Action": ""
					},
					{
						"id": 7,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Health Care",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "25 Nov 2023, 03:43 pm",
						"status": "1",
						"Action": ""
					},
					{
						"id": 8,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Services",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "07 Dec 2023, 11:22 am",
						"status": "1",
						"Action": ""
					},
					{
						"id": 9,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Social Marketing",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "15 Dec 2023, 08:17 am",
						"status": "1",
						"Action": ""
					},
					{
						"id": 10,
						"si_no": "",
						"select": "",
						"questions": "How can I book a service",
						"category": "Media",
						"answers": "Lorem ipsum dolor amet, adipiscing elit",
						"created_at": "29 Dec 2023, 01:22 pm",
						"status": "1",
						"Action": ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "questions" },
				{ "data": "category" },
				{ "data": "answers" },
				{ "data": "created_at" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } if(row['status'] == "1") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},                 
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_faq"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_faq"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
		});
	}

	// Deal List

	if($('#deal_list').length > 0) {
		$('#deal_list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data": [
					{
						"id": 1,
						"Deal_Name": "Collins",
						"Stage": "Qualify To Buy",
						"Deal_Value": "$04,51,000",
						"tag1": "Collab",
						"close_date": "25 Sep 2023",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"owner" : "Hendry Milner",
						"source" : "Paid Social",
						"Probability": "90%",
						"Status": "0"
					},
					{
						"id": 2,
						"Deal_Name": "Konopelski",
						"Stage": "Proposal Made",
						"Deal_Value": "$03,12,500",
						"tag1": "Rated",
						"close_date": "29 Sep 2023",
						"created_date" : "29 Sep 2023, 04:15 pm",
						"owner" : "Guilory Berggren",
						"source" : "Referrals",
						"Probability": "15 %",
						"Status": "1"
					},
					{
						"id": 3,
						"Deal_Name": "Adams",
						"Stage": "Contact Made",
						"Deal_Value": "$04,14,800",
						"tag1": "Rejected",
						"close_date": "04 Oct 2023",
						"created_date" : "04 Oct 2023, 10:18 am",
						"owner" : "Jami Carlile",
						"source" : "Campaigns",
						"Probability": "95 %",
						"Status": "0"
					},
					{
						"id": 4,
						"Deal_Name": "Schumm",
						"Stage": "Qualify To Buy",
						"Deal_Value": "$11,14,400",
						"tag1": "Collab",
						"close_date": "15 Oct 2023",
						"created_date" : "17 Oct 2023, 03:31 pm",
						"owner" : "Theresa Nelson",
						"source" : "Google",
						"Probability": "99 %",
						"Status": "0"
					},
					{
						"id": 5,
						"Deal_Name": "Wisozk",
						"Stage": "Presentation",
						"Deal_Value": "$16,11,400",
						"tag1": "Rated",
						"close_date": "27 Oct 2023",
						"created_date" : "24 Oct 2023, 09:14 pm",
						"owner" : "Smith Cooper",
						"source" : "Paid Social",
						"Probability": "10 %",
						"Status": "2"
					},
					{
						"id": 6,
						"Deal_Name": "Heller",
						"Stage": "Appointment",
						"Deal_Value": "$78,11,800",
						"tag1": "Rated",
						"close_date": "07 Nov 2023",
						"created_date" : "08 Nov 2023, 09:56 am",
						"owner" : "Martin Lewis",
						"source" : "Referrals",
						"Probability": "70 %",
						"Status": "0"
					},
					{
						"id": 7,
						"Deal_Name": "Gutkowski",
						"Stage": "Proposal Made",
						"Deal_Value": "$09,05,947",
						"tag1": "Promotion",
						"close_date": "12 Nov 2023",
						"created_date" : "14 Nov 2023, 04:19 pm",
						"owner" : "Newell Egan",
						"source" : "Campaigns",
						"Probability": "10 %",
						"Status": "2"
					},
					{
						"id": 8,
						"Deal_Name": "Walter",
						"Stage": "Qualify To Buy",
						"Deal_Value": "$04,51,000",
						"tag1": "Rejected",
						"close_date": "23 Nov 2023",
						"created_date" : "23 Nov 2023, 11:14 pm",
						"owner" : "Janet Carlson",
						"source" : "Google",
						"Probability": "90 %",
						"Status": "0"
					},
					{
						"id": 9,
						"Deal_Name": "Hansen",
						"Stage": "Appointment",
						"Deal_Value": "$72,14,078",
						"tag1": "Collab",
						"close_date": "11 Dec 2023",
						"created_date" : "10 Dec 2023, 06:43 am",
						"owner" : "Craig Brown",
						"source" : "Paid Social",
						"Probability": "40 %",
						"Status": "0"
					},
					{
						"id": 10,
						"Deal_Name": "Leuschke",
						"Stage": "Proposal Made",
						"Deal_Value": "$09,05,947",
						"tag1": "Rated",
						"close_date": "17 Dec 2023",
						"created_date" : "25 Dec 2023, 08:17 pm",
						"owner" : "Daniel Byrne",
						"source" : "Referrals",
						"Probability": "47 %",
						"Status": "1"
					}
					],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="deals-details.html" class="title-name">'+row['Deal_Name']+'</a>';
				}},
				{ "data": "Stage" },
				{ "data": "Deal_Value" },
				{ "render": function ( data, type, row ){
					if(row['tag1'] == "Collab") { var class_name = "badge-success-light";var status_name ="Collab" }else if(row['tag1'] == "Rated") { var class_name = "badge-warning-light";var status_name ="Rated" } else if(row['tag1'] == "Promotion"){ var class_name = "badge-purple-light";var status_name ="Promotion"} else { var class_name = "badge-danger-light";var status_name ="Rejected"}
					return '<span class="badge badge-tag '+class_name+'" >'+status_name+'</span>';
				}},
				{ "data": "close_date" },
				{ "data": "owner" },
				{ "data": "Probability" },
				{ "render": function ( data, type, row ){
					if(row['Status'] == "0") { var class_name = "bg-success";var status_name ="Won" }else if(row['Status'] == "1"){ var class_name = "bg-danger";var status_name ="Lost"} else { var class_name = "bg-purple";var status_name ="open"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#"><i class="ti ti-bounce-right text-info"></i>Add Activity</a><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_deal"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="deals-details.html"><i class="ti ti-eye text-blue-light"></i> Preview</a></div></div>';
				}}
			]
		});
	}

	// Testimonials List

	if($('#testimonials_list').length > 0) {
		$('#testimonials_list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Darlee Robertson",
						"customer_image" : "assets/img/profiles/avatar-19.jpg",
						"customer_designation" : "Facility Manager",
						"content" : "Project was received ontime without any mistake",
						"createdat" : "25 Sep 2023, 01:22pm",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Sharon Roy",
						"customer_image" : "assets/img/profiles/avatar-20.jpg",
						"customer_designation" : "Installer",
						"content" : "It help us to manage, track & do more business",
						"createdat" : "29 Sep 2023, 08:12 am",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Vaughan Lewis",
						"customer_image" : "assets/img/profiles/avatar-21.jpg",
						"customer_designation" : "Senior  Manager",
						"content" : "Brillant tool to manage leads & projects",
						"createdat" : "02 Oct 2023, 10:15 am",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jessica Louise",
						"customer_image" : "assets/img/profiles/avatar-23.jpg",
						"customer_designation" : "Test Engineer",
						"content" : "Very responsive and accurate with suggestions",
						"createdat" : "11 Oct 2023, 02:32 pm",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Carol Thomas",
						"customer_image" : "assets/img/profiles/avatar-16.jpg",
						"customer_designation" : "UI /UX Designer",
						"content" : "Happy with measurable on lead management",
						"createdat" : "4 Nov 2023, 04:22 pm",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Dawn Mercha",
						"customer_image" : "assets/img/profiles/avatar-22.jpg",
						"customer_designation" : "Technician",
						"content" : "Pipeline are great for tracking process",
						"createdat" : "16 Nov 2023, 10:51 pm",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Rachel Hampton",
						"customer_image" : "assets/img/profiles/avatar-24.jpg",
						"customer_designation" : "Software Developer",
						"content" : "It have complete visiblity of clients & interactions",
						"createdat" : "25 Nov 2023, 3:43 pm",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonelle Curtiss",
						"customer_image" : "assets/img/profiles/avatar-25.jpg",
						"customer_designation" : "Supervisor",
						"content" : "Give customer best possible service & support",
						"createdat" : "07 Dec 2023, 11:22 am",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonathan Smith",
						"customer_image" : "assets/img/profiles/avatar-26.jpg",
						"customer_designation" : "Team Lead Dev",
						"content" : "It give accurate and real time information",
						"createdat" : "15 Dec 2023, 8:17 am",
						"status" : "1",
						"Action" : ""
					}
					,
					{
						"id" : 11,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Eric Adams",
						"customer_image" : "assets/img/profiles/avatar-06.jpg",
						"customer_designation" : "HR Manager",
						"content" : "Most efficient process, accurate & consistent data",
						"createdat" : "29 Dec 2023, 1:22 pm",
						"status" : "1",
						"Action" : ""
					}
					
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="#" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['customer_image']+'" alt="User Image"></a><a href="javascript:void(0);" class="d-flex flex-column">'+row['customer_name']+'<span class="text-default">'+row['customer_designation']+' </span></a></h2>';
				}},
				{
					"render": function (data, type, row) {
						let starsHtml = '<div class="set-star rating-select filled">';
						for (let i = 0; i < 5; i++) {
						starsHtml += '<i class="fa fa-star me-1"></i>';
						}
						starsHtml += '</div>';
						return starsHtml;
					}
					},
					
				{ "data": "content" },
				{ "data": "createdat" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } if(row['status'] == "1") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#"  data-bs-toggle="modal" data-bs-target="#edit_testimonials"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
				
			]
				
		});
	}

	// Source List

	if ($("#source_list").length > 0) {
		$("#source_list").DataTable({
			bFilter: false,
			bInfo: false,
			ordering: true,
			language: {
			search: " ",
			sLengthMenu: "MENU",
			searchPlaceholder: "Search",
			info: "START - END of TOTAL items",
			lengthMenu: "Show MENU entries",
			paginate: {
				next: 'Next <i class=" fa fa-angle-right"></i> ',
				previous: '<i class="fa fa-angle-left"></i> Prev ',
			},
			},
			initComplete: (settings, json) => {
			$(".dataTables_paginate").appendTo(".datatable-paginate");
			$(".dataTables_length").appendTo(".datatable-length");
			},
			"data": [
			{
				"id": 1,
				"title": "Phone Calls",
				"created_date": "25 Sep 2023, 01:22 pm",
				"status": "0"
			},
			{
				"id": 2,
				"title": "Social Media",
				"created_date": "29 Sep 2023, 04:15 pm",
				"status": "0"
			},
			{
				"id": 3,
				"title": "Referral Sites",
				"created_date": "04 Oct 2023, 10:18 am",
				"status": "0"
			},
			{
				"id": 4,
				"title": "Web Analytics",
				"created_date": "17 Oct 2023, 03:31 pm",
				"status": "1"
			},
			{
				"id": 5,
				"title": "Previous Purchases",
				"created_date": "24 Oct 2023, 09:14 pm",
				"status": "0"
			},
			{
				"id": 6,
				"title": "Lead & Opportunity",
				"created_date": "08 Nov 2023, 09:56 am",
				"status": "0"
			},
			{
				"id": 7,
				"title": "Image-based Features",
				"created_date": "14 Nov 2023, 04:19 pm",
				"status": "0"
			},
			{
				"id": 8,
				"title": "Bots",
				"created_date": "23 Nov 2023, 11:14 pm",
				"status": "0"
			},
			{
				"id": 9,
				"title": "Insights",
				"created_date": "10 Dec 2023, 06:43 am",
				"status": "0"
			},
			{
				"id": 10,
				"title": "Commerce",
				"created_date": "25 Dec 2023, 08:17 pm",
				"status": "0"
			}
			],
			columns: [
			{
				render: function (data, type, row) {
				return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				},
			},
			{ "render": function ( data, type, row ){
				return '<span class="title-name">'+row['title']+'</span>';
			}},
			{ data: "created_date" },
			{
				render: function (data, type, row) {
				if (row["status"] == "1") {
					var class_name = "bg-success";
					var status_name = "Active";
				}
				if (row["status"] == "0") {
					var class_name = "bg-success";
					var status_name = "Active";
				} else {
					var class_name = "bg-danger";
					var status_name = "Inactive";
				}
				return (
					'<span class="badge badge-pill badge-status ' +
					class_name +
					'" >' +
					status_name +
					"</span>"
				);
				},
			},

			{
				render: function (data, type, row) {
				return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_source"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_source"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				},
			},
			],
		});
	}

	if($('#customer-reporttable').length > 0) {
		$('#customer-reporttable').DataTable({
			"bFilter": false, 
			"bInfo": false,
				"ordering": true,
				"autoWidth": true,
			"language": {
				search: ' ',
				sLengthMenu: 'MENU',
				searchPlaceholder: "Search",
				info: "START - END of TOTAL items",
				"lengthMenu":     "Show MENU entries",
				paginate: {
					next: 'Next <i class=" fa fa-angle-right"></i> ',
					previous: '<i class="fa fa-angle-left"></i> Prev '
				},
				},
			initComplete: (settings, json)=>{
				$('.dataTables_paginate').appendTo('.datatable-paginate');
				$('.dataTables_length').appendTo('.datatable-length');
			},    
			"data":[
				{
					"id" : 1,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Darlee Robertson",
					"customer_image" : "assets/img/profiles/avatar-19.jpg",
					"customer_no" : "Facility Manager",
					"phone" : "1234567890",
					"email" : "robertson@example.com",
					"location" : "Germany",
					"tag" : "0",
					"rating" : "4.2",
					"created_date" : "25 Sep 2023, 01:22 pm",
					"owner" : "Hendry Milner",
					"source" : "Paid Social",
					"company_name" : "NovaWave LLC",
					"company_image" : "assets/img/icons/company-icon-01.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Retail Industry",
					"type" : "Customer",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 2,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Sharon Roy",
					"customer_image" : "assets/img/profiles/avatar-20.jpg",
					"customer_no" : "Installer",
					"phone" : "+1 989757485",
					"email" : "sharon@example.com",
					"location" : "USA",
					"tag" : "2",
					"rating" : "5.0",
						"created_date" : "29 Sep 2023, 04:15 pm",
						"owner" : "Guilory Berggren",
						"source" : "Referrals",
					"company_name" : "BlueSky Industries",
					"company_image" : "assets/img/icons/company-icon-02.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Banking",
					"type" : "Accounts",
					"status" : "1",
					"Action" : ""
				},
				{
					"id" : 3,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Vaughan Lewis",
					"customer_image" : "assets/img/profiles/avatar-21.jpg",
					"customer_no" : "Senior  Manager",
					"phone" : "+1 546555455",
					"email" : "vaughan12@example.com",
					"location" : "Canada",
					"tag" : "0",
					"rating" : "3.5",
					"created_date" : "04 Oct 2023, 10:18 am",
					"owner" : "Jami Carlile",
					"source" : "Campaigns",
					"company_name" : "SilverHawk",
					"company_image" : "assets/img/icons/company-icon-03.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Hotels",
					"type" : "Partner",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 4,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Jessica Louise",
					"customer_image" : "assets/img/profiles/avatar-23.jpg",
					"customer_no" : "Test Engineer",
					"phone" : "+1 454478787",
					"email" : "jessica13@example.com",
					"location" : "India",
					"tag" : "1",
					"rating" : "4.5",
					"created_date" : "17 Oct 2023, 03:31 pm",
						"owner" : "Theresa Nelson",
						"source" : "Google",
					"company_name" : "SummitPeak",
					"company_image" : "assets/img/icons/company-icon-04.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Financial Services",
					"type" : "Prospect",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 5,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Carol Thomas",
					"customer_image" : "assets/img/profiles/avatar-16.jpg",
					"customer_no" : "UI /UX Designer",
					"phone" : "+1 124547845",
					"email" : "caroltho3@example.com",
					"location" : "China",
					"tag" : "0",
					"rating" : "4.7",
					"created_date" : "24 Oct 2023, 09:14 pm",
						"owner" : "Smith Cooper",
						"source" : "Paid Social",
					"company_name" : "RiverStone Ventur",
					"company_image" : "assets/img/icons/company-icon-05.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Insurance",
					"type" : "Lead",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 6,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Dawn Mercha",
					"customer_image" : "assets/img/profiles/avatar-22.jpg",
					"customer_no" : "Technician",
					"phone" : "+1 478845447",
					"email" : "dawnmercha@example.com",
					"location" : "Martin Lewis",
					"tag" : "1",
					"rating" : "5.0",
					"created_date" : "08 Nov 2023, 09:56 am",
						"owner" : "Martin Lewis",
						"source" : "Referrals",
					"company_name" : "Bright Bridge Grp",
					"company_image" : "assets/img/icons/company-icon-06.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Consulatation",
					"type" : "Influencer",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 7,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Rachel Hampton",
					"customer_image" : "assets/img/profiles/avatar-24.jpg",
					"customer_no" : "Software Developer",
					"phone" : "+1 215544845",
					"email" : "rachel@example.com",
					"location" : "Indonesia",
					"tag" : "2",
					"rating" : "3.1",
					"created_date" : "14 Nov 2023, 04:19 pm",
						"owner" : "Newell Egan",
						"source" : "Campaigns",
					"company_name" : "CoastalStar Co.",
					"company_image" : "assets/img/icons/company-icon-07.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Agriculture",
					"type" : "Vendor",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 8,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Jonelle Curtiss",
					"customer_image" : "assets/img/profiles/avatar-25.jpg",
					"customer_no" : "Supervisor",
					"phone" : "+1 121145471",
					"email" : "jonelle@example.com",
					"location" : "Cuba",
					"tag" : "1",
					"rating" : "5.0",
						"created_date" : "23 Nov 2023, 11:14 pm",
						"owner" : "Janet Carlson",
						"source" : "Google",
					"company_name" : "HarborView",
					"company_image" : "assets/img/icons/company-icon-08.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Insurance",
					"type" : "Customer",
					"status" : "0",
					"Action" : ""
				},
				{
					"id" : 9,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Jonathan Smith",
					"customer_image" : "assets/img/profiles/avatar-26.jpg",
					"customer_no" : "Team Lead Dev",
					"phone" : "+1 321454789",
					"email" : "jonathan@example.com",
					"location" : "Isreal",
					"tag" : "0",
					"rating" : "2.7",
					"created_date" : "10 Dec 2023, 06:43 am",
						"owner" : "Craig Brown",
						"source" : "Paid Social",
					"company_name" : "Golden Gate Ltd",
					"company_image" : "assets/img/icons/company-icon-09.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Banking",
					"type" : "Accounts",
					"status" : "0",
					"Action" : ""
				}
				,
				{
					"id" : 10,
					"si_no" : "",
					"select" : "",
					"customer_name" : "Brook Carter",
					"customer_image" : "assets/img/profiles/avatar-01.jpg",
					"customer_no" : "Team Lead Dev ",
					"phone" : "+1 278907145",
					"email" : "brook@example.com",
					"location" : "Colombia",
					"tag" : "2",
					"rating" : "3.0",
					"close_date": "17 Dec 2023",
						"created_date" : "25 Dec 2023, 08:17 pm",
						"owner" : "Daniel Byrne",
						"source" : "Referrals",
					"company_name" : "Redwood Inc",
					"company_image" : "assets/img/icons/company-icon-10.svg",
					"owner_image": "assets/img/profiles/avatar-14.jpg",
						"industry" : "Financial Services",
					"type" : "Influencer",
					"status" : "0",
					"Action" : ""
				}
				
			],
		"columns": [
			{ "render": function ( data, type, row ){
				return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
			}},
			{ "render": function ( data, type, row ){
				return '<h2 class="d-flex align-items-center"><a href="#" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['customerreport_image']+'" alt="User Image"></a><a href="javascript:void(0);">'+row['customerreport_name']+'</a></h2>';
			}},
			{ "data": "position" },
			{ "data": "phone" },
			{ "data": "email" },
			{ "data": "location" },
			{ "data": "owner" },
			{ "render": function ( data, type, row ){
				return '<span class="source-report">'+row['source_name']+'</span>';
			}},
			{ "data": "created_date" },
		]
	});
	}

	if($('#recent-project').length > 0) {
		$('#recent-project').DataTable({
			"bFilter": false, 
			"bInfo": false,
			"ordering": false,
			"paging":false,
			"data":[
				{
					"id" : 1,
					"priority_name" : "Truelysell",
					"priority_img" : "assets/img/priority/truellysel.svg",
					"recent_name" : "NovaWave LLC",
					"recent_img" : "assets/img/icons/company-icon-01.svg",
					"client" : "1",
					"due_date" : "15 Oct 2023"
				},
				{
					"id" : 2,
					"priority_name" : "Dreamschat",
					"priority_img" : "assets/img/priority/dreamchat.svg",
					"recent_name" : "BlueSky Industries",
					"recent_img" : "assets/img/icons/company-icon-02.svg",
					"client" : "2",
					"due_date" : "22 Oct 2023"
				},
				{
					"id" : 3,
					"priority_name" : "Truelysell",
					"priority_img" : "assets/img/priority/truellysell.svg",
					"recent_name" : "SilverHawk",
					"recent_img" : "assets/img/icons/company-icon-03.svg",
					"client" : "",
					"due_date" : "27 Oct 2023"
				},
				{
					"id" : 4,
					"priority_name" : "Servbook",
					"priority_img" : "assets/img/priority/servbook.svg",
					"recent_name" : "SummitPeak",
					"recent_img" : "assets/img/icons/company-icon-04.svg",
					"client" : "1",
					"due_date" : "01 Oct 2023"
				},
				{
					"id" : 5,
					"priority_name" : "DreamPOS",
					"priority_img" : "assets/img/priority/dream-pos.svg",
					"recent_name" : "RiverStone Ventur",
					"recent_img" : "assets/img/icons/company-icon-05.svg",
					"client" : "2",
					"due_date" : "06 Oct 2023"
				}
				
			],
			
		"columns": [
			{ "render": function ( data, type, row ){
				return '<h2 class="d-flex align-items-center"><a href="project-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['priority_img']+'" alt="User Image"></a><a href="project-details.html">'+row['priority_name']+'</a></h2>';
			}},
			{ "render": function ( data, type, row ){
				return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['recent_img']+'" alt="User Image"></a><a href="company-details.html">'+row['recent_name']+'</a></h2>';
			}},
			{ "render": function ( data, type, row ){
				if(row['client'] == "1") { var class_name = "bg-light-success";var status_name ="Low" } if(row['client'] == "2") { var class_name = "bg-light-warning";var status_name ="Medium" } else { var class_name = "bg-light-danger";var status_name ="High"}
				return '<span class="d-flex align-items-center badge badge-pill  '+class_name+'" ><span class="badge-dots"></span> '+status_name+'</span>';
			}},
			{ "data": "due_date" },
		]
	});
	}

	if($('#lead-project').length > 0) {
		$('#lead-project').DataTable({
			"bFilter": false, 
			"bInfo": false,
			"ordering": false,
			"paging":false,
			"data":[
				{
					"id" : 1,
					"lead" : "Collins",
					"lead_name" : "NovaWave LLC",
					"lead_city" : "Newyork, USA",
					"lead_img" : "assets/img/icons/company-icon-01.svg",
					"phone" : "+1 875455453",
					"status" : "1"
				},
				{
					"id" : 2,
					"lead" : "Konopelski",
					"lead_name" : "BlueSky Industries",
					"lead_city" : "Winchester, KY",
					"lead_img" : "assets/img/icons/company-icon-02.svg",
					"phone" : "+1 989757485",
					"status" : "2"
				},
				{
					"id" : 3,
					"lead" : "Adams",
					"lead_name" : "SilverHawk",
					"lead_city" : "Jametown, NY",
					"lead_img" : "assets/img/icons/company-icon-03.svg",
					"phone" : "+1 546555455",
					"status" : ""
				},
				{
					"id" : 4,
					"lead" : "Schumm",
					"lead_name" : "SummitPeak",
					"lead_city" : "Compton, RI",
					"lead_img" : "assets/img/icons/company-icon-04.svg",
					"phone" : "+1 454478787",
					"status" : "1"
				}
		
			],
		"columns": [
			{ "data": "lead" },
			{ "render": function ( data, type, row ){
				return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['lead_img']+'" alt="User Image"></a><a href="company-details.html" class="d-flex flex-column">'+row['lead_name']+'<span class="text-default">'+row['lead_city']+' </span></a></h2>';
			}},
			{ "data": "phone" },
			{ "render": function ( data, type, row ){
				if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Closed" } if(row['status'] == "1") { var class_name = "bg-pending";var status_name ="Not Contacted" } else { var class_name = "bg-warning";var status_name ="Contacted"}
				return '<span class="badge badge-pill  '+class_name+'" > '+status_name+'</span>';
			}},
		]
	});
	}

	if($('#deals-project').length > 0) {
		$('#deals-project').DataTable({
			"bFilter": false, 
			"bInfo": false,
			"ordering": false,
			"paging":false,
			"data":[
				{
					"id" : 1,
					"deal_name" : "Collins",
					"stage" : "Conversation",
					"deal_value" : "$04,51,000",
					"probability" : "85%",
					"status" : "1"
				},
				{
					"id" : 2,
					"deal_name" : "Konopelski",
					"stage" : "Pipeline",
					"deal_value" : "$14,51,000",
					"probability" : "56%",
					"status" : "2"
				},
				{
					"id" : 3,
					"deal_name" : "Adams",
					"stage" : "Won",
					"deal_value" : "$12,51,000",
					"probability" : "15%",
					"status" : ""
				},
				{
					"id" : 4,
					"deal_name" : "Schumm",
					"stage" : "Lost",
					"deal_value" : "$51,000",
					"probability" : "45%",
					"status" : "1"
				},
				{
					"id" : 5,
					"deal_name" : "Wisozk",
					"stage" : "Follow Up",
					"deal_value" : "$67,000",
					"probability" : "5%",
					"status" : "2"
				}
		
			],
		"columns": [
			{ "data": "deal_name" },
			{ "data": "stage" },
			{ "data": "deal_value" },
			{ "data": "probability" },
			{ "render": function ( data, type, row ){
				if(row['status'] == "0") { var class_name = "bg-pending";var status_name ="Open" } if(row['status'] == "1") { var class_name = "bg-danger";var status_name ="Lost" } else { var class_name = "bg-success";var status_name ="Won"}
				return '<span class="badge badge-pill  '+class_name+'" >'+status_name+'</span>';
			}},
		]
	});
	}

	// Pipeline List

	if($('#pipeline-list').length > 0) {
		$('#pipeline-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"name" : "Sales",
						"deal_value" : "$4,50,664",
						"no_deal" : "315",
						"stage" : "0",
						"createdat" : "25 Sep 2023",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"name" : "Marketing",
						"deal_value" : "$3,12,893",
						"no_deal" : "447",
						"stage" : "0",
						"createdat" : "29 Sep 2023",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"name" : "Email",
						"deal_value" : "$2,89,274",
						"no_deal" : "654",
						"stage" : "1",
						"createdat" : "15 Oct 2023",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"name" : "Chats",
						"deal_value" : "$1,59,326",
						"no_deal" : "768",
						"stage" : "0",
						"createdat" : "29 Oct 2023",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"name" : "Operational",
						"deal_value" : "$2,90,173",
						"no_deal" : "142",
						"stage" : "0",
						"createdat" : "03 Nov 2023",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"name" : "Collaborative",
						"deal_value" : "$4,51,417",
						"no_deal" : "315",
						"stage" : "2",
						"createdat" : "17 Nov 2023",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"name" : "Differentiate",
						"deal_value" : "$3,17,589",
						"no_deal" : "478",
						"stage" : "3",
						"createdat" : "23 Nov 2023",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"name" : "Interact ",
						"deal_value" : "$1,69,146",
						"no_deal" : "664",
						"stage" : "4",
						"createdat" : "09 Dec 2023",
						"status" : "1",
						"Action" : ""
					}
					
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['name']+'</span>';
				}},
				{ "data": "deal_value" },
				{ "data": "no_deal" },
				{
					"render": function (data, type, row) {
							if(row['stage'] == "0") { var class_name = "success";var status_name ="Win" } else if(row['stage'] == "1") { var class_name = "violet";var status_name ="In Pipeline" } else if(row['stage'] == "2") { var class_name = "green";var status_name ="Conversation"} else if(row['stage'] == "2") { var class_name = "info";var status_name ="Follow Up"} else  { var class_name = "danger";var status_name ="Lost"}
					return '<div class="pipeline-progress d-flex align-items-center"><div class="progress"><div class="progress-bar progress-bar-'+class_name+'" role="progressbar"></div></div><span>'+status_name+'</span></div>';
					}
				},                      
				{ "data": "createdat" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } if(row['status'] == "1") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_pipeline"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
				
			]
				
		});
	}

	// Campaign List

	if($('#campaign-list').length > 0) {
		$('#campaign-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"star" : "",
						"name" : "Distribution",
						"type" : "Public Relations",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "25 Sep 2023",
						"end_date" : "29 Sep 2023",
						"created_date" : "25 Sep 2023",
						"open" : "40.5%",
						"close" : "20.5%",
						"unscubscribe" : "30.5%",
						"delivered" : "70.5%",
						"converstion" : "35.0%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"star" : "",
						"name" : "Merchandising",
						"type" : "Content Marketing",
						"mem_image1" : "assets/img/profiles/avatar-03.jpg",
						"mem_image2": "assets/img/profiles/avatar-05.jpg",
						"mem_image3": "assets/img/profiles/avatar-06.jpg",
						"start_date" : "03 Oct 2023",
						"end_date" : "16 Oct 2023",
						"created_date" : "03 Oct 2023",
						"open" : "65.5%",
						"close" : "83.5%",
						"unscubscribe" : "67.5%",
						"delivered" : "32.0%",
						"converstion" : "22.5%",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"star" : "",
						"name" : "Pricing",
						"type" : "Social Marketing",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-01.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "17 Oct 2023",
						"end_date" : "28 Oct 2023",
						"created_date" : "17 Oct 2023",
						"open" : "64.0%",
						"close" : "97.0%",
						"unscubscribe" : "14.5%",
						"delivered" : "38.5%",
						"converstion" : "53.0%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"star" : "",
						"name" : "Increased sales",
						"type" : "Brand",
						"mem_image1" : "assets/img/profiles/avatar-12.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-13.jpg",
						"start_date" : "07 Nov 2023",
						"end_date" : "14 Nov 2023",
						"created_date" : "07 Nov 2023",
						"open" : "32.5%",
						"close" : "57.0%",
						"unscubscribe" : "26.3%",
						"delivered" : "65.8%",
						"converstion" : "17.4%",
						"status" : "2",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"star" : "",
						"name" : "Brand recognition",
						"type" : "Sales",
						"mem_image1" : "assets/img/profiles/avatar-10.jpg",
						"mem_image2": "assets/img/profiles/avatar-11.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "19 Nov 2023",
						"end_date" : "26 Nov 2023",
						"created_date" : "19 Nov 2023",
						"open" : "72.6%",
						"close" : "53.5%",
						"unscubscribe" : "16.5%",
						"delivered" : "83.0%",
						"converstion" : "29.3%",
						"status" : "3",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"star" : "",
						"name" : "Enhanced brand",
						"type" : "Media",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-09.jpg",
						"mem_image3": "assets/img/profiles/avatar-08.jpg",
						"start_date" : "02 Dec 2023",
						"end_date" : "13 Dec 2023",
						"created_date" : "02 Dec 2023",
						"open" : "56.3%",
						"close" : "20.5%",
						"unscubscribe" : "30.5%",
						"delivered" : "70.5%",
						"converstion" : "35.0%",
						"status" : "4",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"star" : "",
						"name" : "Repeat customers",
						"type" : "Rebranding",
						"mem_image1" : "assets/img/profiles/avatar-06.jpg",
						"mem_image2": "assets/img/profiles/avatar-07.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "17 Dec 2023",
						"end_date" : "27 Dec 2023",
						"created_date" : "17 Dec 2023",
						"open" : "63.2%",
						"close" : "20.5%",
						"unscubscribe" : "30.5%",
						"delivered" : "70.5%",
						"converstion" : "87.8%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"star" : "",
						"name" : "Competitor ",
						"type" : "Product launch",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-05.jpg",
						"start_date" : "06 Jan 2024",
						"end_date" : "17 Jan 2024",
						"created_date" : "06 Jan 2024",
						"open" : "40.5%",
						"close" : "52.7%",
						"unscubscribe" : "13.5%",
						"delivered" : "70.5%",
						"converstion" : "35.0%",
						"status" : "4",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "name" },
				{ "data": "type" },
				{ "render": function ( data, type, row ){
					return '<ul class="list-progress"><li><h6>'+row['open']+'</h6><p>Opened</p></li><li><h6>'+row['close']+'</h6><p>Closed</p></li><li><h6>'+row['unscubscribe']+'</h6><p>Unsubscribe</p></li><li><h6>'+row['delivered']+'</h6><p>Delivered</p></li><li><h6>'+row['converstion']+'</h6><p>Conversation</p></li></ul>';
				}},
				{
					"render": function (data, type, row) {
					return '<ul class="project-mem"><li><a href="#"><img src="'+row['mem_image1']+'" alt="img"></a></li><li><a href="#"><img src="'+row['mem_image2']+'" alt="img"></a></li><li><a href="#"><img src="'+row['mem_image3']+'" alt="img"></a></li><li class="more-set"><a href="#">3+</a></li></ul>';
					}
				},                      
				{ "data": "start_date" },                 
				{ "data": "end_date" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "success";var status_name ="Success" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Pending" } else if(row['status'] == "2") { var class_name = "danger";var status_name ="Bounced" } else if(row['status'] == "3") { var class_name = "green";var status_name ="Running" } else { var class_name = "info";var status_name ="Paused"}
					return '<span class="badge badge-pill badge-status bg-'+class_name+'" >'+status_name+'</span>';
				}},                 
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_campaign"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
				
			]
				
		});
	}

	// Campaign Complete

	if($('#campaign-complete').length > 0) {
		$('#campaign-complete').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('#datatable-paginate');
					$('.dataTables_length').appendTo('#datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"star" : "",
						"name" : "Distribution",
						"type" : "Public Relations",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "25 Sep 2023",
						"end_date" : "29 Sep 2023",
						"created_date" : "25 Sep 2023",
						"open" : "40.5%",
						"close" : "20.5%",
						"unscubscribe" : "30.5%",
						"delivered" : "70.5%",
						"converstion" : "35.0%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"star" : "",
						"name" : "Merchandising",
						"type" : "Content Marketing",
						"mem_image1" : "assets/img/profiles/avatar-03.jpg",
						"mem_image2": "assets/img/profiles/avatar-05.jpg",
						"mem_image3": "assets/img/profiles/avatar-06.jpg",
						"start_date" : "03 Oct 2023",
						"end_date" : "16 Oct 2023",
						"created_date" : "03 Oct 2023",
						"open" : "65.5%",
						"close" : "83.5%",
						"unscubscribe" : "67.5%",
						"delivered" : "32.0%",
						"converstion" : "22.5%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"star" : "",
						"name" : "Pricing",
						"type" : "Social Marketing",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-01.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "17 Oct 2023",
						"end_date" : "28 Oct 2023",
						"created_date" : "17 Oct 2023",
						"open" : "64.0%",
						"close" : "97.0%",
						"unscubscribe" : "14.5%",
						"delivered" : "38.5%",
						"converstion" : "53.0%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"star" : "",
						"name" : "Increased sales",
						"type" : "Brand",
						"mem_image1" : "assets/img/profiles/avatar-12.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-13.jpg",
						"start_date" : "07 Nov 2023",
						"end_date" : "14 Nov 2023",
						"created_date" : "07 Nov 2023",
						"open" : "32.5%",
						"close" : "57.0%",
						"unscubscribe" : "26.3%",
						"delivered" : "65.8%",
						"converstion" : "17.4%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"star" : "",
						"name" : "Brand recognition",
						"type" : "Sales",
						"mem_image1" : "assets/img/profiles/avatar-10.jpg",
						"mem_image2": "assets/img/profiles/avatar-11.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "19 Nov 2023",
						"end_date" : "26 Nov 2023",
						"created_date" : "19 Nov 2023",
						"open" : "72.6%",
						"close" : "53.5%",
						"unscubscribe" : "16.5%",
						"delivered" : "83.0%",
						"converstion" : "29.3%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"star" : "",
						"name" : "Enhanced brand",
						"type" : "Media",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-09.jpg",
						"mem_image3": "assets/img/profiles/avatar-08.jpg",
						"start_date" : "02 Dec 2023",
						"end_date" : "13 Dec 2023",
						"created_date" : "02 Dec 2023",
						"open" : "56.3%",
						"close" : "20.5%",
						"unscubscribe" : "30.5%",
						"delivered" : "70.5%",
						"converstion" : "35.0%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"star" : "",
						"name" : "Repeat customers",
						"type" : "Rebranding",
						"mem_image1" : "assets/img/profiles/avatar-06.jpg",
						"mem_image2": "assets/img/profiles/avatar-07.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "17 Dec 2023",
						"end_date" : "27 Dec 2023",
						"created_date" : "17 Dec 2023",
						"open" : "63.2%",
						"close" : "20.5%",
						"unscubscribe" : "30.5%",
						"delivered" : "70.5%",
						"converstion" : "87.8%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"star" : "",
						"name" : "Competitor ",
						"type" : "Product launch",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-05.jpg",
						"start_date" : "06 Jan 2024",
						"end_date" : "17 Jan 2024",
						"created_date" : "06 Jan 2024",
						"open" : "40.5%",
						"close" : "52.7%",
						"unscubscribe" : "13.5%",
						"delivered" : "70.5%",
						"converstion" : "35.0%",
						"status" : "0",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "name" },
				{ "data": "type" },
				{ "render": function ( data, type, row ){
					return '<ul class="list-progress"><li><h6>'+row['open']+'</h6><p>Opened</p></li><li><h6>'+row['close']+'</h6><p>Closed</p></li><li><h6>'+row['unscubscribe']+'</h6><p>Unsubscribe</p></li><li><h6>'+row['delivered']+'</h6><p>Delivered</p></li><li><h6>'+row['converstion']+'</h6><p>Conversation</p></li></ul>';
				}},
				{
					"render": function (data, type, row) {
					return '<ul class="project-mem"><li><a href="#"><img src="'+row['mem_image1']+'" alt="img"></a></li><li><a href="#"><img src="'+row['mem_image2']+'" alt="img"></a></li><li><a href="#"><img src="'+row['mem_image3']+'" alt="img"></a></li><li class="more-set"><a href="#">3+</a></li></ul>';
					}
				},                      
				{ "data": "start_date" },                 
				{ "data": "end_date" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "success";var status_name ="Success" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Pending" } else if(row['status'] == "2") { var class_name = "danger";var status_name ="Bounced" } else if(row['status'] == "3") { var class_name = "green";var status_name ="Running" } else { var class_name = "info";var status_name ="Paused"}
					return '<span class="badge badge-pill badge-status bg-'+class_name+'" >'+status_name+'</span>';
				}},                 
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_campaign"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
				
			]
				
		});
	}

	// Campaign Archieve

	if($('#campaign-archieve').length > 0) {
		$('#campaign-archieve').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"star" : "",
						"name" : "Distribution",
						"type" : "Public Relations",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "25 Sep 2023",
						"end_date" : "29 Sep 2023",
						"created_date" : "25 Sep 2023",
						"open" : "40.5%",
						"close" : "20.5%",
						"unscubscribe" : "30.5%",
						"delivered" : "70.5%",
						"converstion" : "35.0%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"star" : "",
						"name" : "Merchandising",
						"type" : "Content Marketing",
						"mem_image1" : "assets/img/profiles/avatar-03.jpg",
						"mem_image2": "assets/img/profiles/avatar-05.jpg",
						"mem_image3": "assets/img/profiles/avatar-06.jpg",
						"start_date" : "03 Oct 2023",
						"end_date" : "16 Oct 2023",
						"created_date" : "03 Oct 2023",
						"open" : "65.5%",
						"close" : "83.5%",
						"unscubscribe" : "67.5%",
						"delivered" : "32.0%",
						"converstion" : "22.5%",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"star" : "",
						"name" : "Pricing",
						"type" : "Social Marketing",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-01.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"start_date" : "17 Oct 2023",
						"end_date" : "28 Oct 2023",
						"created_date" : "17 Oct 2023",
						"open" : "64.0%",
						"close" : "97.0%",
						"unscubscribe" : "14.5%",
						"delivered" : "38.5%",
						"converstion" : "53.0%",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"star" : "",
						"name" : "Increased sales",
						"type" : "Brand",
						"mem_image1" : "assets/img/profiles/avatar-12.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-13.jpg",
						"start_date" : "07 Nov 2023",
						"end_date" : "14 Nov 2023",
						"created_date" : "07 Nov 2023",
						"open" : "32.5%",
						"close" : "57.0%",
						"unscubscribe" : "26.3%",
						"delivered" : "65.8%",
						"converstion" : "17.4%",
						"status" : "0",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "name" },
				{ "data": "type" },
				{ "render": function ( data, type, row ){
					return '<ul class="list-progress"><li><h6>'+row['open']+'</h6><p>Opened</p></li><li><h6>'+row['close']+'</h6><p>Closed</p></li><li><h6>'+row['unscubscribe']+'</h6><p>Unsubscribe</p></li><li><h6>'+row['delivered']+'</h6><p>Delivered</p></li><li><h6>'+row['converstion']+'</h6><p>Conversation</p></li></ul>';
				}},
				{
					"render": function (data, type, row) {
					return '<ul class="project-mem"><li><a href="#"><img src="'+row['mem_image1']+'" alt="img"></a></li><li><a href="#"><img src="'+row['mem_image2']+'" alt="img"></a></li><li><a href="#"><img src="'+row['mem_image3']+'" alt="img"></a></li><li class="more-set"><a href="#">3+</a></li></ul>';
					}
				},                      
				{ "data": "start_date" },                 
				{ "data": "end_date" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "success";var status_name ="Success" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Pending" } else if(row['status'] == "2") { var class_name = "danger";var status_name ="Bounced" } else if(row['status'] == "3") { var class_name = "green";var status_name ="Running" } else { var class_name = "info";var status_name ="Paused"}
					return '<span class="badge badge-pill badge-status bg-'+class_name+'" >'+status_name+'</span>';
				}},                 
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_campaign"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
				
			]
				
		});
	}

	// Projects List

	if($('#project-list').length > 0) {
		$('#project-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "#12145",
						"si_no" : "",
						"star" : "",
						"name" : "Truelysell",
						"client" : "NovaWave LLC",
						"pro_img" : "assets/img/priority/truellysel.svg",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"piority" : "0",
						"start_date" : "25 Sep 2023",
						"end_date" : "15 Oct 2023",
						"stage" : "3",
						"type" : "Web App",
						"status" : "0",
						"value": "$03,50,000",
						"hrs": "100",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$200000",
						"currently_spend": "$40000",
						"Action" : ""
					},
					{
						"id" : "#12146",
						"si_no" : "",
						"star" : "",
						"name" : "Dreamschat",
						"client" : "BlueSky Industries",
						"pro_img" : "assets/img/priority/dreamchat.svg",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"piority" : "0",
						"start_date" : "29 Sep 2023",
						"end_date" : "19 Oct 2023",
						"stage" : "1",
						"type" : "Web App",
						"status" : "1",
						"value": "$02,15,000",
						"hrs": "80",
						"mem_image1" : "assets/img/profiles/avatar-03.jpg",
						"mem_image2": "assets/img/profiles/avatar-05.jpg",
						"mem_image3": "assets/img/profiles/avatar-06.jpg",
						"budget": "$300000",
						"currently_spend": "$120000",
						"Action" : ""
					},
					{
						"id" : "#12147",
						"si_no" : "",
						"star" : "",
						"name" : "Truelysell",
						"client" : "SilverHawk",
						"pro_img" : "assets/img/priority/truellysell.svg",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"piority" : "0",
						"start_date" : "05 Oct 2023",
						"end_date" : "12 Oct 2023",
						"stage" : "0",
						"type" : "Web App",
						"status" : "0",
						"value": "$01,45,000",
						"hrs": "75",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-01.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$200000",
						"currently_spend": "$200000",
						"Action" : ""
					},
					{
						"id" : "#12148",
						"si_no" : "",
						"star" : "",
						"name" : "Servbook",
						"client" : "SummitPeak",
						"pro_img" : "assets/img/priority/servbook.svg",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"piority" : "0",
						"start_date" : "14 Oct 2023",
						"end_date" : "24 Oct 2023",
						"stage" : "2",
						"type" : "Web App",
						"status" : "1",
						"value": "$02,15,000",
						"hrs": "60",
						"mem_image1" : "assets/img/profiles/avatar-12.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-13.jpg",
						"budget": "$300000",
						"currently_spend": "$60000",
						"Action" : ""
					},
					{
						"id" : "#12149",
						"si_no" : "",
						"star" : "",
						"name" : "DreamPOS",
						"client" : "RiverStone Ventur",
						"pro_img" : "assets/img/priority/dream-pos.svg",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"piority" : "0",
						"start_date" : "15 Nov 2023",
						"end_date" : "22 Nov 2023",
						"stage" : "2",
						"type" : "Web App",
						"status" : "2",
						"value": "$03,64,000",
						"hrs": "72",
						"mem_image1" : "assets/img/profiles/avatar-10.jpg",
						"mem_image2": "assets/img/profiles/avatar-11.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$120000",
						"currently_spend": "$40000",
						"Action" : ""
					},
					{
						"id" : "#12150",
						"si_no" : "",
						"star" : "",
						"name" : "Kofejob",
						"client" : "CoastalStar Co.",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-06.svg",
						"piority" : "0",
						"start_date" : "25 Nov 2023",
						"end_date" : "09 Dec 2023",
						"stage" : "1",
						"type" : "Meeting",
						"status" : "0",
						"value": "$02,12,000",
						"hrs": "96",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-09.jpg",
						"mem_image3": "assets/img/profiles/avatar-08.jpg",
						"budget": "$200000",
						"currently_spend": "$90000",
						"Action" : ""
					},
					{
						"id" : "#12151",
						"si_no" : "",
						"star" : "",
						"name" : "Doccure",
						"client" : "HarborView",
						"pro_img" : "assets/img/priority/project-02.svg",
						"client_img": "assets/img/icons/company-icon-07.svg",
						"piority" : "0",
						"start_date" : "08 Dec 2023",
						"end_date" : "16 Dec 2023",
						"stage" : "0",
						"type" : "Web App",
						"status" : "1",
						"value": "$04,18,000",
						"hrs": "85",
						"mem_image1" : "assets/img/profiles/avatar-06.jpg",
						"mem_image2": "assets/img/profiles/avatar-07.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$200000",
						"currently_spend": "$195000",
						"Action" : ""
					},
					{
						"id" : "#12152",
						"si_no" : "",
						"star" : "",
						"name" : "Best@laundry",
						"client" : "Golden Gate Ltd",
						"pro_img" : "assets/img/priority/best.svg",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"piority" : "0",
						"start_date" : "21 Dec 2023",
						"end_date" : "13 Jan 2024",
						"stage" : "0",
						"type" : "Meeting",
						"status" : "2",
						"value": "$01,23,000",
						"hrs": "65",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-05.jpg",
						"budget": "$230000",
						"currently_spend": "$220000",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "POS",
						"client" : "CoastalStar Inc",
						"pro_img" : "assets/img/priority/dream-pos.svg",
						"client_img": "assets/img/icons/company-icon-06.svg",
						"piority" : "0",
						"start_date" : "01 Jan 2024",
						"end_date" : "11 Jan 2024",
						"stage" : "1",
						"type" : "Web App",
						"status" : "1",
						"value": "$03,64,000",
						"hrs": "60",
						"mem_image1" : "assets/img/profiles/avatar-08.jpg",
						"mem_image2": "assets/img/profiles/avatar-12.jpg",
						"mem_image3": "assets/img/profiles/avatar-04.jpg",
						"budget": "$200000",
						"currently_spend": "$177777 ",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "Bookserv",
						"client" : "Redwood Inc",
						"pro_img" : "assets/img/priority/servbook.svg",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"piority" : "0",
						"start_date" : "12 Jan 2024",
						"end_date" : "29 Jan 2024",
						"stage" : "1",
						"type" : "Meeting",
						"status" : "1",
						"value": " $04,10,000",
						"hrs": "56",
						"mem_image1" : "assets/img/profiles/avatar-12.jpg",
						"mem_image2": "assets/img/profiles/avatar-14.jpg",
						"mem_image3": "assets/img/profiles/avatar-01.jpg",
						"budget": "$300000",
						"currently_spend": "$100000 ",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "Dreamchat",
						"client" : "Redwood Inc",
						"pro_img" : "assets/img/priority/sports.svg",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"piority" : "0",
						"start_date" : "16 Jan 2024",
						"end_date" : "25 Jan 2024",
						"stage" : "1",
						"type" : "Meeting",
						"status" : "1",
						"value": "$02,19,000",
						"hrs": "55",
						"mem_image1" : "assets/img/profiles/avatar-08.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-12.jpg",
						"budget": "$400000",
						"currently_spend": "$200000 ",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "Sports",
						"client" : "Ventur",
						"pro_img" : "assets/img/priority/best.svg",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"piority" : "0",
						"start_date" : "12 Jan 2024",
						"end_date" : "29 Jan 2024",
						"stage" : "1",
						"type" : "Web App",
						"status" : "1",
						"value": "$01,23,000",
						"hrs": "63",
						"mem_image1" : "assets/img/profiles/avatar-01.jpg",
						"mem_image2": "assets/img/profiles/avatar-11.jpg",
						"mem_image3": "assets/img/profiles/avatar-14.jpg",
						"budget": "$300000",
						"currently_spend": "$100000 ",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="project-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['pro_img']+'" alt="User Image"></a><a href="project-details.html">'+row['name']+'</a></h2>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['client_img']+'" alt="User Image"></a><a href="company-details.html">'+row['client']+'</a></h2>';
				}},   
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "danger";var status_name ="High" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Medium" }  else { var class_name = "success";var status_name ="Low"}
					return '<span class="priority badge badge-tag badge-'+class_name+'-light" ><i class="ti ti-square-rounded-filled"></i>'+status_name+'</span>';
				}},    
				{ "data": "start_date" },                 
				{ "data": "end_date" },
				{ "data": "type" },
				{
					"render": function (data, type, row) {
							if(row['stage'] == "0") { var class_name = "success";var status_name ="Completed" } else if(row['stage'] == "1") { var class_name = "info";var status_name ="Develop" } else if(row['stage'] == "2") { var class_name = "warning";var status_name ="Design"}  else  { var class_name = "violet";var status_name ="Plan"}
					return '<div class="pipeline-progress d-flex align-items-center"><div class="progress"><div class="progress-bar progress-bar-'+class_name+'" role="progressbar"></div></div><span>'+status_name+'</span></div>';
					}
				},   
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" }  else { var class_name = "bg-danger";var status_name ="Inactive"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},       
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item " data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_project"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-clipboard-copy text-green"></i> Clone this Project</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-printer text-info"></i> Print</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-subtask"></i> Add New Task</a></div></div>';
				}},
				
			]
				
		});
	}
	// Estimations List

	if($('#estimations-list').length > 0) {
		$('#estimations-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "#274738",
						"si_no" : "",
						"star" : "",
						"name" : "Truelysell",
						"client" : "NovaWave LLC",
						"Amount" : "$2,15,000",
						"pro_img" : "assets/img/priority/truellysel.svg",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"expiry_date" : "25 Sep 2023",
						"date" : "15 Oct 2023",
						"customer_name" : "Darlee Robertson",
						"customer_image" : "assets/img/profiles/avatar-19.jpg",
						"customer_no" : "Facility Manager",	
						"status": "3",
						"status_no" : "Sent",					
						"Action" : ""
					},
					{
						"id" : "#274737",
						"si_no" : "",
						"star" : "",
						"name" : "Dreamschat",
						"client" : "BlueSky Industries",
						"Amount" : "$1,45,000",
						"pro_img" : "assets/img/priority/dreamchat.svg",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"expiry_date" : "10 Sep 2028",
						"date" : "19 Oct 2023",
						"customer_name" : "Sharon Roy",
						"customer_image" : "assets/img/profiles/avatar-20.jpg",
						"customer_no" : "Installer",
						"status" : "0",						
						"status_no" : "Accepted",						
						"Action" : ""
					},
					{
						"id" : "#274736",
						"si_no" : "",
						"star" : "",
						"name" : "Truelysell",
						"client" : "Silver Hawk",
						"Amount" : "$2,15,000",
						"pro_img" : "assets/img/priority/truellysell.svg",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"expiry_date" : "20 Oct 2026",
						"date" : "24 Oct 2023",
						"customer_name" : "Vaughan Lewis",
						"customer_image" : "assets/img/profiles/avatar-21.jpg",
						"customer_no" : "Senior  Manager",		
						"status" : "1",				
						"status_no" : "Draft",				
						"Action" : ""
					},
					{
						"id" : "#274735",
						"si_no" : "",
						"star" : "",
						"name" : "Servbook",
						"client" : "Summit  Peak",
						"Amount" : "$4,80,380",
						"pro_img" : "assets/img/priority/servbook.svg",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"expiry_date" : "07 Oct 2028",
						"date" : "10 Nov 2023",
						"customer_name" : "Jessica Louise",
						"customer_image" : "assets/img/profiles/avatar-23.jpg",
						"customer_no" : "Test Engineer",
						"status" : "0",						
						"status_no" : "Accepted",						
						"Action" : ""
					},
					{
						"id" : "#274734",
						"si_no" : "",
						"star" : "",
						"name" : "DreamPOS",
						"client" : "RiverStone Ventur",
						"Amount" : "$2,12,000",
						"pro_img" : "assets/img/priority/dream-pos.svg",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"expiry_date" : "10 Oct 2026",
						"date" : "18 Nov 2023",
						"customer_name" : "Carol Thomas",
						"customer_image" : "assets/img/profiles/avatar-16.jpg",
						"customer_no" : "UI /UX Designer",
						"status" : "2",						
						"status_no" : "Declined",						
						"Action" : ""
					},
					{
						"id" : "#274733",
						"si_no" : "",
						"star" : "",
						"name" : "Kofejob",
						"client" : "CoastalStar Co.",
						"Amount" : "$3,50,000",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-07.svg",
						"expiry_date" : "18 Oct 2027",
						"date" : "20 Nov 2023",
						"customer_name" : "Dawn Mercha",
						"customer_image" : "assets/img/profiles/avatar-22.jpg",
						"customer_no" : "Technician",
						"status" : "1",						
						"status_no" : "Draft",						
						"Action" : ""
					},
					{
						"id" : "#274732",
						"si_no" : "",
						"star" : "",
						"name" : "Doccure",
						"client" : "HarborView",
						"Amount" : "$1,23,000",
						"pro_img" : "assets/img/priority/project-02.svg",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"expiry_date" : "05 Nov 2026",
						"date" : "07 Dec 2023",
						"customer_name" : "Rachel Hampton",
						"customer_image" : "assets/img/profiles/avatar-24.jpg",
						"customer_no" : "Software Developer",
						"status" : "3",						
						"status_no" : "Sent",						
						"Action" : ""
					},
					{
						"id" : "#274731",
						"si_no" : "",
						"star" : "",
						"name" : "Best@laundry",
						"client" : "Golden Gate Ltd",
						"Amount" : "$3,12,50",
						"pro_img" : "assets/img/priority/best.svg",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"expiry_date" : "11 Nov 2028",
						"date" : "14 Dec 2023",
						"customer_name" : "Jonelle Curtiss",
						"customer_image" : "assets/img/profiles/avatar-24.jpg",
						"customer_no" : "Supervisor",
						"status" : "0",						
						"status_no" : "Accepted",						
						"Action" : ""
					},
					{
						"id" : "#274730",
						"si_no" : "",
						"star" : "",
						"name" : "Dreamsports",
						"client" : "Golden Gate Ltd",
						"Amount" : "$4,18,000",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-10.svg",
						"expiry_date" : "20 Nov 2027",
						"date" : "22 Dec 2023",
						"customer_name" : "Jonathan Smith",
						"customer_image" : "assets/img/profiles/avatar-26.jpg",
						"customer_no" : "Team Lead Dev",
						"status" : "2",						
						"status_no" : "Declined",						
						"Action" : ""
					},
					{
						"id" : "#274729",
						"si_no" : "",
						"star" : "",
						"name" : "Truelysell",
						"client" : "NovaWave LLC",
						"Amount" : "$4,80,380",
						"pro_img" : "assets/img/priority/truellysel.svg",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"expiry_date" : "25 Nov 2026",
						"date" : "28 Dec 2023",
						"customer_name" : "Brook Carter",
						"customer_image" : "assets/img/profiles/avatar-01.jpg",
						"customer_no" : "Team Lead Dev",
						"status" : "0",						
						"status_no" : "Accepted",						
						"Action" : ""
					},
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					 return '<a href="#" class="title-name">'+row['id']+'</a>';
					// if(row['id'] == "0") { var class_name = "add-popups"; } else if(row['status'] == "1") { var class_name = "warning" } else if(row['status'] == "2") { var class_name = "danger";var status_name ="Declined" } else if(row['status'] == "3") { var class_name = "violet";var status_name ="Sent" }
					// return '<span class="badge badge-pill badge-status bg-'+class_name+'" >'+id+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['client_img']+'" alt="User Image"></a><a href="company-details.html">'+row['client']+'</a></h2>';
				}},
				{ "data": "Amount" },
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="#" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['pro_img']+'" alt="User Image"></a><a href="#">'+row['name']+'</a></h2>';
				}},   
				{ "data": "date" },                 
				{ "data": "expiry_date" },
				  				
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="#" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['customer_image']+'" alt="User Image"></a><a href="javascript:void(0);" class="d-flex flex-column">'+row['customer_name']+'<span class="text-default">'+row['customer_no']+' </span></a></h2>';
				}}, 
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "success";var status_name ="Accepted" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Draft" } else if(row['status'] == "2") { var class_name = "danger";var status_name ="Declined" } else if(row['status'] == "3") { var class_name = "violet";var status_name ="Sent" }
					return '<span class="badge badge-pill badge-status bg-'+class_name+'" >'+status_name+'</span>';
				}},       
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_estimations"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-clipboard-copy text-violet"></i> View Estimation</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-checks text-green"></i> Mark as Accpeted</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-file"></i> Mark as Draft</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-sticker text-blue"></i> Mark as Declined</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-printer text-info"></i> Print</a></div></div>';
				}},
				
			]
				
		});
	}

	// Proposals List

	if($('#proposals-list').length > 0) {
		$('#proposals-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "#1493024",
						"si_no" : "",
						"star" : "",
						"subject" : "SEO Proposal",
						"sent_to" : "NovaWave LLC",
						"pro_img" : "assets/img/priority/truellysel.svg",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"total_value" : "$2,05,426",
						"project" : "Truelysell",
						"piority" : "0",
						"created_date": "21 May 2024",
						"date" : "15 May 2024",
						"open_till" : "15 Aug 2023",
						"status" : "0",
						"status_name" : "Accepted",
						"Action" : ""
					},
					{
						"id" : "#1493023",
						"si_no" : "",
						"star" : "",
						"subject" : "Web Design",
						"sent_to" : "Redwood Inc",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-10.svg",
						"total_value" : "$2,105",
						"project" : "Dreamsports",
						"piority" : "0",
						"created_date": "15 Apr 2024",
						"date" : "16 Jan 2024",
						"open_till" : "15 Sep 2024",
						"status" : "1",
						"status_name" : "Declined",
						"Action" : ""
					},
					{
						"id" : "#1493022",
						"si_no" : "",
						"star" : "",
						"subject" : "Logo & Branding",
						"sent_to" : "HarborView",
						"pro_img" : "assets/img/priority/best.svg",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"total_value" : "$4,05,656",
						"project" : "Best@laundry",
						"piority" : "0",
						"created_date": "12  Mar 2024",
						"date" : "17 Sep 2024",
						"open_till" : "15 Nov 2024",
						"status" : "2",
						"status_name" : "Deleted",
						"Action" : ""
					},
					{
						"id" : "#1493021",
						"si_no" : "",
						"star" : "",
						"subject" : "Development",
						"sent_to" : "CoastalStar Co.",
						"pro_img" : "assets/img/priority/project-02.svg",
						"client_img": "assets/img/icons/company-icon-07.svg",
						"total_value" : "$2,05,426",
						"project" : "Doccure",
						"piority" : "0",
						"created_date": "15 Feb 2024",
						"date" : "18 May 2024",
						"open_till" : "15 Jun 2024",
						"status" : "4",
						"status_name" : "Draft",
						"Action" : ""
					},
					{
						"id" : "#1493020",
						"si_no" : "",
						"star" : "",
						"subject" : "SEO Proposal",
						"sent_to" : "RiverStone Ventur",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"total_value" : "$3,15,145",
						"project" : "Kofejob",
						"piority" : "0",
						"created_date": "15 Jan 2024",
						"date" : "19 Aug 2024",
						"open_till" : "15 Oct 2024",
						"status" : "3",
						"status_name" : "Sent",
						"Action" : ""
					},
					{
						"id" : "#1493019",
						"si_no" : "",
						"star" : "",
						"subject" : "Web Design",
						"sent_to" : "Summit  Peak",
						"pro_img" : "assets/img/priority/dream-pos.svg",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"total_value" : "$6,154",
						"project" : "DreamPOS",
						"piority" : "0",
						"created_date": "15 Dec 2023",
						"date" : "20 May 2024",
						"open_till" : "08 Aug 2024",
						"status" : "4",
						"status_name" : "Draft",
						"Action" : ""
					},
					{
						"id" : "#1493018",
						"si_no" : "",
						"star" : "",
						"subject" : "Logo",
						"sent_to" : "Silver Hawk",
						"pro_img" : "assets/img/priority/servbook.svg",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"total_value" : "$1,457",
						"project" : "Servbook",
						"piority" : "0",
						"created_date": "15 Nov 2023",
						"date" : "22 Aug 2024",
						"open_till" : "25 Jan 2025",
						"status" : "5",
						"status_name" : "Open",
						"Action" : ""
					},
					{
						"id" : "#1493017",
						"si_no" : "",
						"star" : "",
						"subject" : "Branding",
						"sent_to" : "BlueSky Industries",
						"pro_img" : "assets/img/priority/truellysell.svg",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"total_value" : "$2,01,464",
						"project" : "Truelysell",
						"piority" : "0",
						"created_date": "15 Sep 2023",
						"date" : "15 May 2024",
						"open_till" : "12 Aug 2024",
						"status" : "0",
						"status_name" : "Accepted",
						"Action" : ""
					},
					{
						"id" : "#1493018",
						"si_no" : "",
						"star" : "",
						"subject" : "Development",
						"sent_to" : "Golden Gate Ltd",
						"pro_img" : "assets/img/priority/dreamchat.svg",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"total_value" : "$1,10,145",
						"project" : "Dreamschat",
						"piority" : "0",
						"created_date": "15 Aug 2023",
						"date" : "14 Aug 2024",
						"open_till" : "07 Dec 2024 ",	
						"status" : "1",
						"status_name" : "Declined",
						"Action" : ""
					},
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="#" class="title-name" >'+row['id']+'</a>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="#" class="title-name">'+row['subject']+'</a>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['client_img']+'" alt="User Image"></a><a href="company-details.html">'+row['sent_to']+'</a></h2>';
				}},
				{ "data": "total_value" },    
				{ "data": "date" },                 
				{ "data": "open_till" }, 
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="#" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['pro_img']+'" alt="User Image"></a><a href="#">'+row['project']+'</a></h2>';
				}},
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "success";var status_name ="Accepted" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Declined" } else if(row['status'] == "2") { var class_name = "danger";var status_name ="Deleted" } else if(row['status'] == "3") { var class_name = "green";var status_name ="Sent" } else if(row['status'] == "4") { var class_name = "pending";var status_name ="Draft" } else { var class_name = "purple";var status_name ="Paused"} 
					return '<span class="badge badge-pill badge-status bg-'+class_name+'" >'+status_name+'</span>';
				}},      
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_proposals"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-clipboard-copy text-green"></i> View Proposal</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-checks text-success"></i> Mark as Accpeted</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-file text-tertiary"></i> Mark as Draft</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-sticker text-blue"></i> Mark ad Declined</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-subtask text-pink"></i> Convert to estimate</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-file-invoice text-tertiary"></i> Convert to Invoice</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-printer text-info"></i> Print</a></div></div>';
				}},
				
			]
				
		});
	}

	// Contracts List

	if($('#contracts-list').length > 0) {
		$('#contracts-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "#1493024",
						"si_no" : "",
						"star" : "",
						"subject" : "SEO Proposal",
						"customer" : "NovaWave LLC",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"contract_type" : "Contracts under Seal",
						"contract_value" : "$2,05,426",
						"date" : "15 Aug 2024",
						"end_date" : "15 May 2024",
						"Action" : ""
					},
					{
						"id" : "#1493023",
						"si_no" : "",
						"star" : "",
						"subject" : "Web Design",
						"customer" : "Redwood Inc",
						"client_img": "assets/img/icons/company-icon-10.svg",
						"contract_type" : "Implied Contracts",
						"contract_value" : "$2,105",
						"date" : "15 Sep 2024",
						"end_date" : "15 Apr 2024",
						"Action" : ""
					},
					{
						"id" : "#1493022",
						"si_no" : "",
						"star" : "",
						"subject" : "Logo & Branding",
						"customer" : "HarborView",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"contract_type" : "Implied Contracts",
						"contract_value" : "$4,05,656",
						"date" : "15 Nov 2024",
						"end_date" : "15 Mar 2024",
						"Action" : ""
					},
					{
						"id" : "#1493021",
						"si_no" : "",
						"star" : "",
						"subject" : "Development",
						"customer" : "CoastalStar Co.",
						"client_img": "assets/img/icons/company-icon-07.svg",
						"contract_type" : "Executory Contracts",
						"contract_value" : "$2,05,426",
						"date" : "15 Jun 2024",
						"end_date" : "15 Feb 2024",
						"Action" : ""
					},
					{
						"id" : "#1493020",
						"si_no" : "",
						"star" : "",
						"subject" : "SEO Proposal",
						"customer" : "RiverStone Ventur",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"contract_type" : "Voidable Contracts",
						"contract_value" : "$3,15,145",
						"date" : "15 Oct 2024",
						"end_date" : "15 Jan 2024",
						"Action" : ""
					},
					{
						"id" : "#1493019",
						"si_no" : "",
						"star" : "",
						"subject" : "Web Design",
						"customer" : "Summit  Peak",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"contract_type" : "Unilateral Contracts",
						"contract_value" : "$6,154",
						"date" : "08 Aug 2024",
						"end_date" : "15 Dec 2023",
						"Action" : ""
					},
					{
						"id" : "#1493018",
						"si_no" : "",
						"star" : "",
						"subject" : "Logo",
						"customer" : "Silver Hawk",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"contract_type" : "Unconscionable",
						"contract_value" : "$1,457",
						"date" : "25 Jan 2025 ",
						"end_date" : "15 Nov 2023",
						"Action" : ""
					},
					{
						"id" : "#1493017",
						"si_no" : "",
						"star" : "",
						"subject" : "Branding",
						"customer" : "BlueSky Industries",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"contract_type" : "Express Contracts",
						"contract_value" : "$2,01,464",
						"date" : "12 Aug 2024",
						"end_date" : "15 Sep 2023",
						"Action" : ""
					},
					{
						"id" : "#1493018",
						"si_no" : "",
						"star" : "",
						"subject" : "Development",
						"customer" : "Golden Gate Ltd",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"contract_type" : "Contracts under Seal",
						"contract_value" : "$1,10,145",
						"date" : "07 Dec 2024",
						"end_date" : "15 Aug 2023 ",
						"Action" : ""
					},
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="#" class="title-name">'+row['id']+'</a>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="#" class="title-name">'+row['subject']+'</a>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['client_img']+'" alt="User Image"></a><a href="company-details.html">'+row['customer']+'</a></h2>';
				}},  
				{ "data": "contract_value" },                 
				{ "data": "contract_type" },                 
				{ "data": "date" },                 
				{ "data": "end_date" },				
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contracts"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-copy text-tertiary"></i> Clone</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-clipboard-copy text-violet"></i> View Contract</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-checks text-success"></i> Mark as Signed</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-printer text-info"></i> Print</a></div></div>';
				}},
				
			]
				
		});
	}

	// Proposals List

	if($('#invoices-list').length > 0) {
		$('#invoices-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "#1254058",
						"si_no" : "",
						"star" : "",
						"sent_to" : "NovaWave LLC",
						"pro_img" : "assets/img/priority/truellysel.svg",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"amount" : "$2,15,000",
						"paid_amount" : "$2,15,000",
						"balance_amount" : "$0",
						"project" : "Truelysell",
						"due_date": "21 May 2024",
						"status" : "1",
						"status_name" : "Partially Paid",
						"Action" : ""
					},
					{
						"id" : "#1254057",
						"si_no" : "",
						"star" : "",
						"sent_to" : "BlueSky Industries",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-10.svg",
						"amount" : "$1,45,000",
						"paid_amount" : "$1,45,000",
						"balance_amount" : "$0",
						"project" : "Dreamschat",
						"due_date" : "19 Oct 2023",
						"status" : "0",
						"status_name" : "Paid",
						"Action" : ""
					},
					{
						"id" : "#1254056",
						"si_no" : "",
						"star" : "",
						"sent_to" : "Silver Hawk",
						"pro_img" : "assets/img/priority/best.svg",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"amount" : "$2,15,000",
						"paid_amount" : "$1,00,000",
						"balance_amount" : "$1,15,000",
						"project" : "Truelysell",
						"due_date" : "24 Oct 2023",
						"status" : "1",
						"status_name" : "Partially Paid",
						"Action" : ""
					},
					{
						"id" : "#1254055",
						"si_no" : "",
						"star" : "",
						"sent_to" : "Summit  Peak",
						"pro_img" : "assets/img/priority/project-02.svg",
						"client_img": "assets/img/icons/company-icon-07.svg",
						"amount" : "$4,80,380",
						"paid_amount" : "$4,80,380",
						"balance_amount" : "$0",
						"project" : "Servbook",
						"due_date" : "10 Nov 2023",
						"status" : "0",
						"status_name" : "Paid",
						"Action" : ""
					},
					{
						"id" : "#1254054",
						"si_no" : "",
						"star" : "",
						"sent_to" : "RiverStone Ventur",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"amount" : "$2,12,000",
						"paid_amount" : "$0",
						"balance_amount" : "$2,12,000",
						"project" : "DreamPOS",
						"due_date" : "18 Nov 2023",
						"status" : "2",
						"status_name" : "Unpaid",
						"Action" : ""
					},
					{
						"id" : "#1254053",
						"si_no" : "",
						"star" : "",
						"sent_to" : "CoastalStar Co.",
						"pro_img" : "assets/img/priority/dream-pos.svg",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"amount" : "$3,50,000",
						"paid_amount" : "$1,50,000",
						"balance_amount" : "$2,00,000",
						"project" : "Kofejob",
						"due_date" : "20 Nov 2023",
						"status" : "1",
						"status_name" : "Partially Paid",
						"Action" : ""
					},
					{
						"id" : "#1254052",
						"si_no" : "",
						"star" : "",
						"sent_to" : "HarborView",
						"pro_img" : "assets/img/priority/servbook.svg",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"amount" : "$1,23,000",
						"paid_amount" : "$1,23,000",
						"balance_amount" : "$1,23,000",
						"project" : "Doccure",
						"due_date" : "07 Dec 2023",
						"status" : "3",
						"status_name" : "Overdue",
						"Action" : ""
					},
					{
						"id" : "#1254051",
						"si_no" : "",
						"star" : "",
						"sent_to" : "Golden Gate Ltd",
						"pro_img" : "assets/img/priority/truellysell.svg",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"amount" : "$3,12,500",
						"paid_amount" : "$3,12,500",
						"balance_amount" : "$0",
						"project" : "Best@laundry",
						"due_date" : "14 Dec 2023",
						"status" : "0",
						"status_name" : "Paid",
						"Action" : ""
					},
					{
						"id" : "#1254050",
						"si_no" : "",
						"star" : "",
						"sent_to" : "Redwood Inc",
						"pro_img" : "assets/img/priority/dreamchat.svg",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"amount" : "$4,18,000",
						"paid_amount" : "$0",
						"balance_amount" : "$4,18,000",
						"project" : "Dreamsports",
						"due_date" : "22 Dec 2023",
						"open_till" : "07 Dec 2024 ",	
						"status" : "2",
						"status_name" : "Unpaid",
						"Action" : ""
					},
					{
						"id" : "#1254049",
						"si_no" : "",
						"star" : "",
						"sent_to" : "NovaWave LLC",
						"pro_img" : "assets/img/priority/dreamchat.svg",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"amount" : "$5,00,000",
						"paid_amount" : "$5,00,000",
						"balance_amount" : "$0",
						"project" : "Truelysell",
						"due_date" : "28 Dec 2023",	
						"status" : "0",
						"status_name" : "Paid",
						"Action" : ""
					},
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="#" class="title-name">'+row['id']+'</a>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['client_img']+'" alt="User Image"></a><a href="company-details.html">'+row['sent_to']+'</a></h2>';
				}},				  
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="#" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['pro_img']+'" alt="User Image"></a><a href="#">'+row['project']+'</a></h2>';
				}},
				{ "data": "due_date" },    
				{ "data": "amount" },    
				{ "data": "paid_amount" },    
				{ "data": "balance_amount" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "success";var status_name ="Paid" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Partially Paid" } else if(row['status'] == "2") { var class_name = "danger";var status_name ="Unpaid" } else if(row['status'] == "3") { var class_name = "violet";var status_name ="Overdue" }  
					return '<span class="badge badge-pill badge-status bg-'+class_name+'" >'+status_name+'</span>';
				}},      
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item " data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_invoices"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-clipboard-copy text-green"></i> View Invoices</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-checks text-success"></i> Mark as Paid</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-file text-tertiary"></i> Mark as Partially Paid</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-sticker text-blue"></i> Mark ad Unpaid</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-printer text-info"></i> Print</a></div></div>';
				}},
				
			]
				
		});
	}

	// Contracts List

	if($('#payments-list').length > 0) {
		$('#payments-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"invoice_id" : "#1254058",
						"customer" : "NovaWave LLC",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"amount" : "$2500",
						"due_date" : "15 Oct 2023",
						"payment_method" : "Cash",
						"transaction_id" : "TXNID1234567890",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254057",
						"customer" : "BlueSky Industries",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"amount" : "$1450",
						"due_date" : "19 Oct 2023",
						"payment_method" : "Credit",
						"transaction_id" : "TXNID9876543210",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254056",
						"customer" : "Silver Hawk",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"amount" : "$2100",
						"due_date" : "24 Oct 2023",
						"payment_method" : "Cash",
						"transaction_id" : "TXNID2468135790",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254055",
						"customer" : "Summit Peak",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"amount" : "$4000",
						"due_date" : "10 Nov 2023",
						"payment_method" : "Credit",
						"transaction_id" : "TXNID1357924680",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254054",
						"customer" : "RiverStone Ventur",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"amount" : "$2120",
						"due_date" : "18 Nov 2023",
						"payment_method" : "Cash",
						"transaction_id" : "TXNID0123456789",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254053",
						"customer" : "CoastalStar Co.",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"amount" : "$3500",
						"due_date" : "20 Nov 2023",
						"payment_method" : "Credit",
						"transaction_id" : "TXNIDABCDE12345",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254052",
						"customer" : "HarborView",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"amount" : "$1230",
						"due_date" : "07 Dec 2023",
						"payment_method" : "Cash",
						"transaction_id" : "TXNID54321XYZ789",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254051",
						"customer" : "Golden Gate Ltd",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"amount" : "$3125",
						"due_date" : "14 Dec 2023",
						"payment_method" : "Credit",
						"transaction_id" : "TXNIDQWERTY0987",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254050",
						"customer" : "Redwood Inc",
						"client_img": "assets/img/icons/company-icon-10.svg",
						"amount" : "$4180",
						"due_date" : "22 Dec 2023",
						"payment_method" : "Cash",
						"transaction_id" : "TXNID98765ASDF43",
						"Action" : ""
					},
					{
						"invoice_id" : "#1254049",
						"customer" : "NovaWave LLC",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"amount" : "$5000",
						"due_date" : "28 Dec 2023",
						"payment_method" : "Cash",
						"transaction_id" : "TXNID1A2B3C4D5E6",
						"Action" : ""
					},			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<a href="#" class="title-name">'+row['invoice_id']+'</a>';
				}},
				
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['client_img']+'" alt="User Image"></a><a href="company-details.html">'+row['customer']+'</a></h2>';
				}},  
				{ "data": "amount" },                 
				{ "data": "due_date" },                 
				{ "data": "payment_method" },                 
				{ "data": "transaction_id" },				
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-eye text-indigo"></i> Preview</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_payments"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
				
			]
				
		});
	}

	// Analytics Contact

	if($('#analytic-contact').length > 0) {
		$('#analytic-contact').DataTable({
			"bFilter": false, 
			"bInfo": false,
			"ordering": false,
			"paging":false,
			"data":[
				{
					"id" : 1,
					"lead_name" : "Carol Thomas",
					"lead_city" : "UI /UX Designer",
					"lead_img" : "assets/img/profiles/avatar-16.jpg",
					"phone" : "+1 124547845",
					"email" : "caroo3@example.com",
					"date" : "25 Sep 2023, 12:12 pm"
				},
				{
					"id" : 2,
					"lead_name" : "Dawn Mercha",
					"lead_city" : "Technician",
					"lead_img" : "assets/img/profiles/avatar-22.jpg",
					"phone" : "+1 478845447",
					"email" : "dercha@example.com",
					"date" : "27 Sep 2023, 11:23 pm"
				},
				{
					"id" : 3,
					"lead_name" : "Rachel Hampton",
					"lead_city" : "Software developer",
					"lead_img" : "assets/img/profiles/avatar-23.jpg",
					"phone" : "+1 215544845",
					"email" : "rael@example.com",
					"date" : "04 Oct 2023, 04:12 pm"
				},
				{
					"id" : 4,
					"lead_name" : "Jonelle Curtiss",
					"lead_city" : "Supervisor",
					"lead_img" : "assets/img/profiles/avatar-24.jpg",
					"phone" : "+1 124547845",
					"email" : "joe@example.com",
					"date" : "17 Oct 2023, 11:34 am"
				},
				{
					"id" : 5,
					"lead_name" : "Rachel Hampton",
					"lead_city" : "Software developer",
					"lead_img" : "assets/img/profiles/avatar-23.jpg",
					"phone" : "+1 215544845",
					"email" : "rael@example.com",
					"date" : "04 Oct 2023, 04:12 pm"
				},
				{
					"id" : 6,
					"lead_name" : "sharon Roy",
					"lead_city" : "Installer",
					"lead_img" : "assets/img/profiles/avatar-20.jpg",
					"phone" : "+1 466701256",
					"email" : "sharon@example.com",
					"date" : "15 Nov 2023, 07:26 pm"
				}
		
			],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="contact-details.html" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['lead_img']+'" alt="User Image"></a><a href="contact-details.html" class="d-flex flex-column">'+row['lead_name']+'<span class="text-default">'+row['lead_city']+' </span></a></h2>';
				}},
				{ "data": "email" },
				{ "data": "phone" },
				{ "data": "date" }
			]
		});
	}

	// Analytics Deal

	if($('#analytic-deal').length > 0) {
		$('#analytic-deal').DataTable({
			"bFilter": false, 
			"bInfo": false,
			"ordering": false,
			"paging":false,
			"data":[
				{
					"id" : 1,
					"name" : "Collins",
					"stage" : "Conversation",
					"value" : "$04,51,000",
					"probability" : "85%",
					"email" : "caroo3@example.com",
					"status" : "0"
				},
				{
					"id" : 2,
					"name" : "Konopelski",
					"stage" : "Pipeline",
					"value" : "$04,14,800",
					"probability" : "15%",
					"status" : "1"
				},
				{
					"id" : 3,
					"name" : "Adams",
					"stage" : "Won",
					"value" : "$04,14,800",
					"probability" : "95%",
					"status" : "2"
				},
				{
					"id" : 4,
					"name" : "Schumm",
					"stage" : "Lost",
					"value" : "$9,14,400",
					"probability" : "47%",
					"status" : "2"
				},
				{
					"id" : 5,
					"name" : "Wisozk",
					"stage" : "Follow Up",
					"value" : "$11,14,400",
					"probability" : "98%",
					"status" : "2"
				}
		
			],
			"columns": [
				{ "data": "name" },
				{ "data": "stage" },
				{ "data": "value" },
				{ "data": "probability" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-purple";var status_name ="Open" } if(row['status'] == "1") { var class_name = "bg-danger";var status_name ="Lost" } else { var class_name = "bg-success";var status_name ="Won"}
					return '<span class="badge badge-pill badge-status '+class_name+'" > '+status_name+'</span>';
				}},
			]
		});
	}

	// Analytics Company

	if($('#analytic-company').length > 0) {
		$('#analytic-company').DataTable({
			"bFilter": false, 
			"bInfo": false,
			"ordering": false,
			"paging":false,
			"data":[
				{
					"id" : 1,
					"lead_name" : "NovaWaveLLC",
					"lead_img" : "assets/img/icons/company-icon-01.svg",
					"phone" : "+1 124547845",
					"email" : "caroo3@example.com",
					"date" : "25 Sep 2023, 12:12 pm"
				},
				{
					"id" : 2,
					"lead_name" : "SilverHawk",
					"lead_img" : "assets/img/icons/company-icon-03.svg",
					"phone" : "+1 478845447",
					"email" : "dercha@example.com",
					"date" : "27 Sep 2023, 11:23 pm"
				},
				{
					"id" : 3,
					"lead_name" : "SummitPeak",
					"lead_img" : "assets/img/icons/company-icon-04.svg",
					"phone" : "+1 215544845",
					"email" : "rael@example.com",
					"date" : "04 Oct 2023, 04:12 pm"
				},
				{
					"id" : 4,
					"lead_name" : "RiverStone Ventur",
					"lead_img" : "assets/img/icons/company-icon-05.svg",
					"phone" : "+1 124547845",
					"email" : "joe@example.com",
					"date" : "17 Oct 2023, 11:34 am"
				},
				{
					"id" : 5,
					"lead_name" : "CoastalStar Co.",
					"lead_img" : "assets/img/icons/company-icon-07.svg",
					"phone" : "+1 124547845",
					"email" : "joe@example.com",
					"date" : "17 Oct 2023, 11:34 am"
				},
				{
					"id" : 6,
					"lead_name" : "Redwood Inc",
					"lead_img" : "assets/img/icons/company-icon-10.svg",
					"phone" : "+1 466701256",
					"email" : "sharon@example.com",
					"date" : "15 Nov 2023, 07:26 pm"
				}
		
			],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['lead_img']+'" alt="User Image"></a><a href="company-details.html">'+row['lead_name']+'</a></h2>';
				}},
				{ "data": "email" },
				{ "data": "phone" },
				{ "data": "date" }
			]
		});
	}

	// Analytics Lead

	if($('#analytic-lead').length > 0) {
		$('#analytic-lead').DataTable({
			"bFilter": false, 
			"bInfo": false,
			"ordering": false,
			"paging":false,
			"data":[
				{
					"id" : 1,
					"name" : "Collins",
					"lead_name" : "NovaWaveLLC",
					"lead_img" : "assets/img/icons/company-icon-01.svg",
					"lead_city" : "Newyork, USA",
					"phone" : "+1 875455453",
					"status" : "0"
				},
				{
					"id" : 2,
					"name" : "Collins",
					"lead_name" : "Konopelski",
					"lead_img" : "assets/img/icons/company-icon-02.svg",
					"lead_city" : "Winchester, KY",
					"phone" : "+1 989757485",
					"status" : "1"
				},
				{
					"id" : 3,
					"name" : "Adams",
					"lead_name" : "SilverHawk",
					"lead_img" : "assets/img/icons/company-icon-03.svg",
					"lead_city" : "Jametown, NY",
					"phone" : "+1 546555455",
					"status" : "0"
				},
				{
					"id" : 4,
					"name" : "Schumm",
					"lead_name" : "SummitPeak",
					"lead_img" : "assets/img/icons/company-icon-04.svg",
					"lead_city" : "Compton, RI",
					"phone" : "+1 454478787",
					"status" : "2"
				},
				{
					"id" : 5,
					"name" : "Wisozk",
					"lead_name" : "RiverStone Ventur",
					"lead_img" : "assets/img/icons/company-icon-05.svg",
					"lead_city" : "Dayton, OH",
					"phone" : "+1 124547845",
					"status" : "0"
				}
		
			],
			"columns": [
				{ "data": "name" },
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="leads-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['lead_img']+'" alt="User Image"></a><a href="leads-details.html" class="d-flex flex-column">'+row['lead_name']+'<span class="text-default">'+row['lead_city']+' </span></a></h2>';
				}},
				{ "data": "phone" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Closed" } else if(row['status'] == "1") { var class_name = "bg-pending";var status_name ="Not Contacted" } else { var class_name = "bg-warning";var status_name ="Contacted"}
					return '<span class="badge badge-pill text-white '+class_name+'" > '+status_name+'</span>';
				}},
			]
		});
	}

	// Activity

	if($('#activity-list').length > 0) {
		$('#activity-list').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"checkbox": "",
						"title" : "We scheduled a meeting for next week",
						"due_date" : "25 Sep 2023, 12:12 pm",
						"owner" : "Hendry Milner",
						"created_date" : "22 Sep 2023, 10:14 am",
						"status" : "0",
						"action": ""
					},
					{
						"id" : 2,
						"checkbox": "",
						"title" : "Had conversation with Fred regarding task",
						"due_date" : "29 Sep 2023, 04:12 pm",
						"owner" : "Monty Beer",
						"created_date" : "27 Sep 2023, 03:26 pm",
						"status" : "3",
						"action": ""
					},
					{
						"id" : 3,
						"checkbox": "",
						"title" : "Analysing latest time estimation for new project",
						"due_date" : "11 Oct 2023, 05:00 pm",
						"owner" : "Bradtke",
						"created_date" : "03 Oct 2023, 03:53 pm",
						"status" : "1",
						"action": ""
					},
					{
						"id" : 4,
						"checkbox": "",
						"title" : "Store and manage contact data",
						"due_date" : "19 Oct 2023, 02:35 pm",
						"owner" : "Swaniawski",
						"created_date" : "14 Oct 2023, 01:25 pm",
						"status" : "2",
						"action": ""
					},
					{
						"id" : 5,
						"checkbox": "",
						"title" : "Will have a meeting before project start",
						"due_date" : "27 Oct 2023, 12:30 pm",
						"owner" : "Sally",
						"created_date" : "21 Oct 2023, 03:00 pm",
						"status" : "0",
						"action": ""
					},
					{
						"id" : 6,
						"checkbox": "",
						"title" : "Call John and discuss about project",
						"due_date" : "12 Nov 2023, 10:20 pm",
						"owner" : "Itzel",
						"created_date" : "02 Nov 2023, 05:35 pm",
						"status" : "3",
						"action": ""
					},
					{
						"id" : 7,
						"checkbox": "",
						"title" : "Built landing pages",
						"due_date" : "25 Nov 2023, 01:40 pm",
						"owner" : "Danny",
						"created_date" : "20 Nov 2023, 08:20 am",
						"status" : "2",
						"action": ""
					},
					{
						"id" : 8,
						"checkbox": "",
						"title" : "Regarding latest updates in project",
						"due_date" : "30 Nov 2023, 09:20 pm",
						"owner" : " Lynch",
						"created_date" : "25 Nov 2023, 07:20 pm",
						"status" : "1",
						"action": ""
					},
					{
						"id" : 9,
						"checkbox": "",
						"title" : "Discussed budget proposal with Edwin",
						"due_date" : "08 Dec 2023, 04:35 pm",
						"owner" : "Merwin",
						"created_date" : "01 Dec 2023, 10:45 am",
						"status" : "3",
						"action": ""
					},
					{
						"id" : 10,
						"checkbox": "",
						"title" : "Attach final proposal for upcoming project",
						"due_date" : "19 Dec 2023, 02:20 pm",
						"owner" : " Andrew",
						"created_date" : "10 Dec 2023, 06:30 pm",
						"status" : "1",
						"action": ""
					},
					{
						"id" : 11,
						"checkbox": "",
						"title" : "Discussed budget proposal with Edwin",
						"due_date" : "26 Dec 2023, 08:30 am",
						"owner" : "Clausen",
						"created_date" : "18 Dec 2023, 05:00 pm",
						"status" : "3",
						"action": ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "data": "title" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-purple";var status_name ="Meeting";var icon_class_name = "user-share" } else if(row['status'] == "1") { var class_name = "bg-warning";var status_name ="Email";var icon_class_name = "mail" } else if(row['status'] == "2") { var class_name = "bg-blue";var status_name ="Task";var icon_class_name = "subtask" } else { var class_name = "bg-green";var status_name ="Calls";var icon_class_name = "phone" }
					return '<span class="badge activity-badge '+class_name+'" ><i class="ti ti-'+icon_class_name+'"></i>'+status_name+'</span>';
				}},    
				{ "data": "due_date" },
				{ "data": "owner" },
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_activity"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
			]
		});
	}

	// Activity

	if($('#activity-calls').length > 0) {
		$('#activity-calls').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 2,
						"checkbox": "",
						"title" : "Had conversation with Fred regarding task",
						"due_date" : "29 Sep 2023, 04:12 pm",
						"owner" : "Monty Beer",
						"created_date" : "27 Sep 2023, 03:26 pm",
						"status" : "3",
						"action": ""
					},
					{
						"id" : 6,
						"checkbox": "",
						"title" : "Call John and discuss about project",
						"due_date" : "12 Nov 2023, 10:20 pm",
						"owner" : "Itzel",
						"created_date" : "02 Nov 2023, 05:35 pm",
						"status" : "3",
						"action": ""
					},
					{
						"id" : 9,
						"checkbox": "",
						"title" : "Discussed budget proposal with Edwin",
						"due_date" : "08 Dec 2023, 04:35 pm",
						"owner" : "Merwin",
						"created_date" : "01 Dec 2023, 10:45 am",
						"status" : "3",
						"action": ""
					},
					{
						"id" : 11,
						"checkbox": "",
						"title" : "Discussed budget proposal with Edwin",
						"due_date" : "26 Dec 2023, 08:30 am",
						"owner" : "Clausen",
						"created_date" : "18 Dec 2023, 05:00 pm",
						"status" : "3",
						"action": ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "data": "title" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-purple";var status_name ="Meeting";var icon_class_name = "user-share" } else if(row['status'] == "1") { var class_name = "bg-warning";var status_name ="Email";var icon_class_name = "user-share" } else if(row['status'] == "2") { var class_name = "bg-blue";var status_name ="Task";var icon_class_name = "user-share" } else { var class_name = "bg-green";var status_name ="Calls";var icon_class_name = "user-share" }
					return '<span class="badge activity-badge '+class_name+'" ><i class="ti ti-'+icon_class_name+'"></i> '+status_name+'</span>';
				}},    
				{ "data": "due_date" },
				{ "data": "owner" },
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_activity"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
			]
		});
	}

	// Activity

	if($('#activity-mail').length > 0) {
		$('#activity-mail').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 3,
						"checkbox": "",
						"title" : "Analysing latest time estimation for new project",
						"due_date" : "11 Oct 2023, 05:00 pm",
						"owner" : "Bradtke",
						"created_date" : "03 Oct 2023, 03:53 pm",
						"status" : "1",
						"action": ""
					},
					{
						"id" : 8,
						"checkbox": "",
						"title" : "Regarding latest updates in project",
						"due_date" : "30 Nov 2023, 09:20 pm",
						"owner" : " Lynch",
						"created_date" : "25 Nov 2023, 07:20 pm",
						"status" : "1",
						"action": ""
					},
					{
						"id" : 10,
						"checkbox": "",
						"title" : "Attach final proposal for upcoming project",
						"due_date" : "19 Dec 2023, 02:20 pm",
						"owner" : " Andrew",
						"created_date" : "10 Dec 2023, 06:30 pm",
						"status" : "1",
						"action": ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "data": "title" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-purple";var status_name ="Meeting";var icon_class_name = "user-share" } else if(row['status'] == "1") { var class_name = "bg-warning";var status_name ="Email";var icon_class_name = "user-share" } else if(row['status'] == "2") { var class_name = "bg-blue";var status_name ="Task";var icon_class_name = "user-share" } else { var class_name = "bg-green";var status_name ="Calls";var icon_class_name = "user-share" }
					return '<span class="badge activity-badge '+class_name+'" ><i class="ti ti-'+icon_class_name+'"></i> '+status_name+'</span>';
				}},    
				{ "data": "due_date" },
				{ "data": "owner" },
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_activity"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
			]
		});
	}

	// Activity

	if($('#activity-task').length > 0) {
		$('#activity-task').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 4,
						"checkbox": "",
						"title" : "Store and manage contact data",
						"due_date" : "19 Oct 2023, 02:35 pm",
						"owner" : "Swaniawski",
						"created_date" : "14 Oct 2023, 01:25 pm",
						"status" : "2",
						"action": ""
					},
					{
						"id" : 7,
						"checkbox": "",
						"title" : "Built landing pages",
						"due_date" : "25 Nov 2023, 01:40 pm",
						"owner" : "Danny",
						"created_date" : "20 Nov 2023, 08:20 am",
						"status" : "2",
						"action": ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "data": "title" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-purple";var status_name ="Meeting";var icon_class_name = "user-share" } else if(row['status'] == "1") { var class_name = "bg-warning";var status_name ="Email";var icon_class_name = "mail" } else if(row['status'] == "2") { var class_name = "bg-blue";var status_name ="Task";var icon_class_name = "user-share" } else { var class_name = "bg-green";var status_name ="Calls";var icon_class_name = "phone" }
					return '<span class="badge activity-badge '+class_name+'" ><i class="ti ti-'+icon_class_name+'"></i> '+status_name+'</span>';
				}},    
				{ "data": "due_date" },
				{ "data": "owner" },
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_activity"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
			]
		});
	}

	// Activity

	if($('#activity-meeting').length > 0) {
		$('#activity-meeting').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"checkbox": "",
						"title" : "We scheduled a meeting for next week",
						"due_date" : "25 Sep 2023, 12:12 pm",
						"owner" : "Hendry Milner",
						"created_date" : "22 Sep 2023, 10:14 am",
						"status" : "0",
						"action": ""
					},
					{
						"id" : 2,
						"checkbox": "",
						"title" : "Will have a meeting before project start",
						"due_date" : "27 Oct 2023, 12:30 pm",
						"owner" : "Sally",
						"created_date" : "21 Oct 2023, 03:00 pm",
						"status" : "0",
						"action": ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "data": "title" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-purple";var status_name ="Meeting";var icon_class_name = "user-share" } else if(row['status'] == "1") { var class_name = "bg-warning";var status_name ="Email";var icon_class_name = "user-share" } else if(row['status'] == "2") { var class_name = "bg-blue";var status_name ="Task";var icon_class_name = "user-share" } else { var class_name = "bg-green";var status_name ="Calls";var icon_class_name = "user-share" }
					return '<span class="badge activity-badge '+class_name+'" ><i class="ti ti-'+icon_class_name+'"></i> '+status_name+'</span>';
				}},    
				{ "data": "due_date" },
				{ "data": "owner" },
				{ "data": "created_date" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_activity"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}},
			]
		});
	}

	// Language List

	if($('#language-list').length > 0) {
		$('#language-list').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"checkbox": "",
						"rating": "",
						"lang_img" : "assets/img/icons/flag-01.svg",
						"language" : "English",
						"code" : "en",
						"total" : "3481",
						"done" : "2861",
						"stage" : "1",
						"rtl": "",
						"progress": "80%",
						"status" : "0",
						"action": ""
					},
					{
						"id" : 2,
						"checkbox": "",
						"rating": "",
						"lang_img" : "assets/img/icons/flag-02.svg",
						"language" : "Arabic",
						"code" : "ar",
						"total" : "4815",
						"done" : "4815",
						"stage" : "0",
						"rtl": "checked",
						"progress": "100%",
						"status" : "0",
						"action": ""
					},
					{
						"id" : 3,
						"checkbox": "",
						"rating": "",
						"lang_img" : "assets/img/icons/flag-03.svg",
						"language" : "German",
						"code" : "zh",
						"total" : "2590",
						"done" : "250",
						"stage" : "3",
						"rtl": "checked",
						"progress": "5%",
						"status" : "0",
						"action": ""
					},
					{
						"id" : 4,
						"checkbox": "",
						"rating": "",
						"lang_img" : "assets/img/icons/flag-04.svg",
						"language" : "French",
						"code" : "hi",
						"total" : "1892",
						"done" : "387",
						"stage" : "2",
						"rtl": "checked",
						"progress": "40%",
						"status" : "0",
						"action": ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="javascript:void(0);" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['lang_img']+'" alt="User Image"></a><a href="javascript:void(0);">'+row['language']+'</a></h2>';
				}},
				{ "data": "code" },
				{
					"render": function (data, type, row) {
						if(row['rtl'] == "checked") { var attr_name = "checked";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
						return '<div class="status-toggle"><input type="checkbox" id="'+row['language']+'" class="check" '+attr_name+'><label for="'+row['language']+'" class="checktoggle">/label></div>';
					}
				},     
				{ "data": "total" },
				{ "data": "done" },
				{
					"render": function (data, type, row) {
							if(row['stage'] == "0") { var class_name = "success" } else if(row['stage'] == "1") { var class_name = "warning" } else if(row['stage'] == "2") { var class_name = "info"} else  { var class_name = "danger"}
					return '<div class="pipeline-progress d-flex align-items-center"><div class="progress"><div class="progress-bar progress-bar-'+class_name+'" role="progressbar"></div></div><span>'+row['progress']+'</span></div>';
					}
				},     
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}}, 
				{ "render": function ( data, type, row ){
					return '<div class="d-flex align-items-center"><ul class="lang-type"><li><a href="language-web.html">Web</a></li><li><a href="javascript:void(0);">App</a></li><li><a href="javascript:void(0);">Admin</a></li></ul><div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_translation"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_translation"><i class="ti ti-trash text-danger"></i> Delete</a></div></div></div>';
				}},
			]
		});
	}

	// Language Web

	if($('#language-web').length > 0) {
		$('#language-web').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"checkbox": "",
						"rating": "",
						"medium" : "Web",
						"file" : "Inventory",
						"total" : "3481",
						"done" : "2861",
						"progress": "80%",
						"stage" : "1",
						"action": ""
					},
					{
						"id" : 2,
						"checkbox": "",
						"rating": "",
						"medium" : "Web",
						"file" : "Expense",
						"total" : "4815",
						"done" : "4815",
						"progress": "100%",
						"stage" : "0",
						"action": ""
					},
					{
						"id" : 3,
						"checkbox": "",
						"rating": "",
						"medium" : "Web",
						"file" : "Product",
						"total" : "2590",
						"done" : "250",
						"progress": "5%",	
						"stage" : "3",
						"action": ""
					},
					{
						"id" : 4,
						"checkbox": "",
						"rating": "",
						"medium" : "Web",
						"file" : "Settings",
						"total" : "1892",
						"done" : "387",
						"progress": "40%",
						"stage" : "2",
						"action": ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "medium" },
				{ "render": function ( data, type, row ){
					return '<span class="black-text">'+row['file']+'</i></span>';
				}},
				{ "data": "total" },
				{ "data": "done" },
				{
					"render": function (data, type, row) {
							if(row['stage'] == "0") { var class_name = "success" } else if(row['stage'] == "1") { var class_name = "warning" } else if(row['stage'] == "2") { var class_name = "info"} else  { var class_name = "danger"}
					return '<div class="pipeline-progress d-flex align-items-center"><div class="progress"><div class="progress-bar progress-bar-'+class_name+'" role="progressbar"></div></div><span>'+row['progress']+'</span></div>';
					}
				}, 
				{ "render": function ( data, type, row ){
					return '<a href="#" data-bs-toggle="modal" data-bs-target="#add_translate"><i class="ti ti-edit text-black"></i></a>';
				}},
			]
		});
	}

	// Manage Users List

	if($('#manage-users-list').length > 0) {
		$('#manage-users-list').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Darlee Robertson",
						"customer_image" : "assets/img/profiles/avatar-19.jpg",
						"customer_no" : "Facility Manager",
						"phone" : "1234567890",
						"email" : "robertson@example.com",
						"location" : "Germany",
						"created" : "25 Sep 2023, 12:12 pm",
						"last_activity": "2 mins ago",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Sharon Roy",
						"customer_image" : "assets/img/profiles/avatar-20.jpg",
						"customer_no" : "Installer",
						"phone" : "+1 989757485",
						"email" : "sharon@example.com",
						"location" : "USA",
						"created" : "27 Sep 2023, 07:40 am",
						"last_activity": "5 mins ago",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Vaughan Lewis",
						"customer_image" : "assets/img/profiles/avatar-21.jpg",
						"customer_no" : "Senior  Manager",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"location" : "Canada",
						"created" : "29 Sep 2023, 08:20 am",
						"last_activity": "2 days ago",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jessica Louise",
						"customer_image" : "assets/img/profiles/avatar-23.jpg",
						"customer_no" : "Test Engineer",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"location" : "India",
						"created" : "25 Sep 2023, 12:12 pm",
						"last_activity": "2 mins ago",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Carol Thomas",
						"customer_image" : "assets/img/profiles/avatar-16.jpg",
						"customer_no" : "UI /UX Designer",
						"phone" : "+1 124547845",
						"email" : "caroltho3@example.com",
						"location" : "China",
						"created" : "02 Oct 2023, 10:10 am",
						"last_activity": "Online",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Dawn Mercha",
						"customer_image" : "assets/img/profiles/avatar-22.jpg",
						"customer_no" : "Technician",
						"phone" : "+1 478845447",
						"email" : "dawnmercha@example.com",
						"location" : "Martin Lewis",
						"created" : "17 Oct 2023, 04:25 pm",
						"last_activity": "3 days ago",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Rachel Hampton",
						"customer_image" : "assets/img/profiles/avatar-24.jpg",
						"customer_no" : "Software Developer",
						"phone" : "+1 215544845",
						"email" : "rachel@example.com",
						"location" : "Indonesia",
						"created" : "28 Oct 2023, 07:16 am",
						"last_activity": "10 days ago",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonelle Curtiss",
						"customer_image" : "assets/img/profiles/avatar-25.jpg",
						"customer_no" : "Supervisor",
						"phone" : "+1 121145471",
						"email" : "jonelle@example.com",
						"location" : "Cuba",
						"created" : "08 Nov 2023, 06:10 am",
						"last_activity": "1 week go",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonathan Smith",
						"customer_image" : "assets/img/profiles/avatar-26.jpg",
						"customer_no" : "Team Lead Dev",
						"phone" : "+1 321454789",
						"email" : "jonathan@example.com",
						"location" : "Isreal",
						"created" : "15 Nov 2023, 11:50 am",
						"last_activity": "1 day ago",
						"status" : "0",
						"Action" : ""
					}
					,
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Brook Carter",
						"customer_image" : "assets/img/profiles/avatar-01.jpg",
						"customer_no" : "Team Lead Dev ",
						"phone" : "+1 278907145",
						"email" : "brook@example.com",
						"location" : "Colombia",
						"created" : "25 Nov 2023, 06:34 pm",
						"last_activity": "8 mins ago",
						"status" : "0",
						"Action" : ""
					}
					
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="javascript:void(0);" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['customer_image']+'" alt="User Image"></a><a href="javascript:void(0);" class="d-flex flex-column">'+row['customer_name']+' <span class="text-default">'+row['customer_no']+' </span></a></h2>';
				}},
				{ "data": "phone" },
				{ "data": "email" },
				{ "data": "location" },
				{ "data": "created" },
				{ "data": "last_activity" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
		});
	}

	// Delete Request

	if($('#delete_request').length > 0) {
		$('#delete_request').DataTable({
			"bFilter": false, 
			"bInfo": false,
				"ordering": true,
				"autoWidth": true,
			"language": {
				search: ' ',
				sLengthMenu: '_MENU_',
				searchPlaceholder: "Search",
				info: "_START_ - _END_ of _TOTAL_ items",
				lengthMenu:     "Show _MENU_ entries",
				paginate: {
					next: 'Next <i class=" fa fa-angle-right"></i> ',
					previous: '<i class="fa fa-angle-left"></i> Prev '
				},
			},
					initComplete: (settings, json)=>{
						$('.dataTables_paginate').appendTo('.datatable-paginate');
						$('.dataTables_length').appendTo('.datatable-length');
					},  
					"data":[
						{
							"id" : 1,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Darlee Robertson",
							"customer_image" : "assets/img/profiles/avatar-19.jpg",
							"customer_no" : "Facility Manager",
							"created" : "25 Sep 2023, 12:12 pm",
							"delete_request": "25 Sep 2023, 12:12 pm",
							"Action" : ""
						},
						{
							"id" : 2,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Sharon Roy",
							"customer_image" : "assets/img/profiles/avatar-20.jpg",
							"customer_no" : "Installer",
							"created" : "27 Sep 2023, 07:40 am",
							"delete_request" : "27 Sep 2023, 07:40 am",
							"Action" : ""
						},
						{
							"id" : 3,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Vaughan Lewis",
							"customer_image" : "assets/img/profiles/avatar-21.jpg",
							"customer_no" : "Senior  Manager",
							"created" : "29 Sep 2023, 08:20 am",
							"delete_request": "29 Sep 2023, 08:20 am",
							"Action" : ""
						},
						{
							"id" : 4,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Jessica Louise",
							"customer_image" : "assets/img/profiles/avatar-23.jpg",
							"customer_no" : "Test Engineer",
							"created" : "25 Sep 2023, 12:12 pm",
							"delete_request": "25 Sep 2023, 12:12 pm",
							"Action" : ""
						},
						{
							"id" : 5,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Carol Thomas",
							"customer_image" : "assets/img/profiles/avatar-16.jpg",
							"customer_no" : "UI /UX Designer",
							"created" : "02 Oct 2023, 10:10 am",
							"delete_request": "02 Oct 2023, 10:10 am",
							"Action" : ""
						},
						{
							"id" : 6,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Dawn Mercha",
							"customer_image" : "assets/img/profiles/avatar-22.jpg",
							"customer_no" : "Technician",
							"created" : "17 Oct 2023, 04:25 pm",
							"delete_request": "17 Oct 2023, 04:25 pm",
							"Action" : ""
						},
						{
							"id" : 7,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Rachel Hampton",
							"customer_image" : "assets/img/profiles/avatar-24.jpg",
							"customer_no" : "Software Developer",
							"created" : "28 Oct 2023, 07:16 am",
							"delete_request": "28 Oct 2023, 07:16 am",
							"Action" : ""
						},
						{
							"id" : 8,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Jonelle Curtiss",
							"customer_image" : "assets/img/profiles/avatar-25.jpg",
							"customer_no" : "Supervisor",
							"created" : "08 Nov 2023, 06:10 am",
							"delete_request": "08 Nov 2023, 06:10 am",
							"Action" : ""
						},
						{
							"id" : 9,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Jonathan Smith",
							"customer_image" : "assets/img/profiles/avatar-26.jpg",
							"customer_no" : "Team Lead Dev",
							"created" : "15 Nov 2023, 11:50 am",
							"delete_request": "15 Nov 2023, 11:50 am",
							"Action" : ""
						}
						,
						{
							"id" : 10,
							"si_no" : "",
							"select" : "",
							"customer_name" : "Brook Carter",
							"customer_image" : "assets/img/profiles/avatar-01.jpg",
							"customer_no" : "Team Lead Dev ",
							"created" : "25 Nov 2023, 06:34 pm",
							"delete_request": "25 Nov 2023, 06:34 pm",
							"Action" : ""
						}
						
					],
				"columns": [
					{ "render": function ( data, type, row ){
						return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
					}},
					{ "render": function ( data, type, row ){
						return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
					}},
					{ "render": function ( data, type, row ){
						return '<h2 class="d-flex align-items-center"><a href="javascript:void(0);" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['customer_image']+'" alt="User Image"></a><a href="javascript:void(0);" class="d-flex flex-column">'+row['customer_name']+' <span class="text-default">'+row['customer_no']+' </span></a></h2>';
					}},
					{ "data": "created" },
					{ "data": "delete_request" },
					{ "render": function ( data, type, row ){
						return '<span class="badge badge-tag badge-success-light" data-bs-toggle="modal" data-bs-target="#delete_account">Confirm</span>';
					}},
				]
			});
	}

	// Roles

	if($('#roles_list').length > 0) {
		$('#roles_list').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"roles_name" : "Admin",
						"created" : "25 Sep 2023, 12:12 pm",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"roles_name" : "Company Owner",
						"created" : "27 Sep 2023, 07:40 am",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"roles_name" : "Deal Owner",
						"created" : "29 Sep 2023, 08:20 am",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"roles_name" : "Project Manager",
						"created" : "25 Sep 2023, 12:12 pm",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"roles_name" : "Client",
						"created" : "15 Oct 2023, 06:18 pm",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"roles_name" : "Lead",
						"created" : "29 Oct 2023, 03:10 pm",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "data": "roles_name" },
				{ "data": "created" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_role"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="permission.html"><i class="ti ti-shield text-success"></i> Permission</a></div></div>';
				}}
			]
		});
	}

	// Permission

	if($('#permission_list').length > 0) {
		$('#permission_list').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"module" : "Dashboard",
						"sub_module" : "Dashboard",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"module" : "Contacts",
						"sub_module" : "Contacts",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"module" : "Companies",
						"sub_module" : "Companies",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"module" : "Leads",
						"sub_module" : "Leads",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"module" : "Deals",
						"sub_module" : "Deals",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"module" : "Pipelines",
						"sub_module" : "Pipelines",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"module" : "Compaign",
						"sub_module" : "Compaign",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"module" : "Projects",
						"sub_module" : "Projects",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"module" : "Tasks",
						"sub_module" : "Tasks",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					},
					{
						"id" : 10,
						"si_no" : "",
						"module" : "Activity",
						"sub_module" : "Activity",
						"create" : "",
						"edit" : "",
						"view" : "",
						"delete" : "",
						"allow" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "data": "module" },
				{ "data": "sub_module" },
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}}
			]
		});
	}

	// Contact messages

	if($('#contact-messages-list').length > 0) {
		$('#contact-messages-list').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Darlee Robertson",
						"customer_image" : "assets/img/profiles/avatar-19.jpg",
						"customer_no" : "Facility Manager",
						"phone" : "1234567890",
						"email" : "robertson@example.com",
						"message" : "Duis aute irure dolor in reprehenderit",
						"created" : "25 Sep 2023, 12:12 pm",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Sharon Roy",
						"customer_image" : "assets/img/profiles/avatar-20.jpg",
						"customer_no" : "Installer",
						"phone" : "+1 989757485",
						"email" : "sharon@example.com",
						"message" : "Excepteur sint occaecat cupidatat",
						"created" : "27 Sep 2023, 07:40 am",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Vaughan Lewis",
						"customer_image" : "assets/img/profiles/avatar-21.jpg",
						"customer_no" : "Senior  Manager",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"message" : "Lorem ipsum dolor sit consectetur",
						"created" : "29 Sep 2023, 08:20 am",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jessica Louise",
						"customer_image" : "assets/img/profiles/avatar-23.jpg",
						"customer_no" : "Test Engineer",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"message" : "Nemo enim ipsam voluptatem quia",
						"created" : "25 Sep 2023, 12:12 pm",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Carol Thomas",
						"customer_image" : "assets/img/profiles/avatar-16.jpg",
						"customer_no" : "UI /UX Designer",
						"phone" : "+1 124547845",
						"email" : "caroltho3@example.com",
						"message" : "Sed ut perspiciatis unde omnis iste",
						"created" : "02 Oct 2023, 10:10 am",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Dawn Mercha",
						"customer_image" : "assets/img/profiles/avatar-22.jpg",
						"customer_no" : "Technician",
						"phone" : "+1 478845447",
						"email" : "dawnmercha@example.com",
						"message" : "Ut enim ad minim veniam, quis",
						"created" : "17 Oct 2023, 04:25 pm",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Rachel Hampton",
						"customer_image" : "assets/img/profiles/avatar-24.jpg",
						"customer_no" : "Software Developer",
						"phone" : "+1 215544845",
						"email" : "rachel@example.com",
						"message" : "Duis aute irure dolor in reprehenderit",
						"created" : "28 Oct 2023, 07:16 am",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonelle Curtiss",
						"customer_image" : "assets/img/profiles/avatar-25.jpg",
						"customer_no" : "Supervisor",
						"phone" : "+1 121145471",
						"email" : "jonelle@example.com",
						"message" : "Ut enim ad minim veniam, quis",
						"created" : "08 Nov 2023, 06:10 am",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonathan Smith",
						"customer_image" : "assets/img/profiles/avatar-26.jpg",
						"customer_no" : "Team Lead Dev",
						"phone" : "+1 321454789",
						"email" : "jonathan@example.com",
						"message" : "Excepteur sint occaecat cupidatat",
						"created" : "15 Nov 2023, 11:50 am",
						"Action" : ""
					}
					,
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Brook Carter",
						"customer_image" : "assets/img/profiles/avatar-01.jpg",
						"customer_no" : "Team Lead Dev ",
						"phone" : "+1 278907145",
						"email" : "brook@example.com",
						"message" : "Ut enim ad minim veniam, quis",
						"created" : "25 Nov 2023, 06:34 pm",
						"Action" : ""
					}
					
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="javascript:void(0);" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['customer_image']+'" alt="User Image"></a><a href="javascript:void(0);" class="d-flex flex-column">'+row['customer_name']+' <span class="text-default">'+row['customer_no']+' </span></a></h2>';
				}},
				{ "data": "phone" },
				{ "data": "email" },
				{ "data": "message" },
				{ "data": "created" },
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
		});
	}

	// Tickets 

	if($('#tickets-list').length > 0) {
		$('#tickets-list').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"ticket_id" : "#4987",
						"subject" : "Support for theme",
						"assigned_name" : "Richard",
						"assigned_image" : "assets/img/profiles/avatar-02.jpg",
						"assigned_date" : "22 Sep 2023",
						"created" : "25 Sep 2023, 12:12 pm",
						"due_date" : "25 Dec 2023",
						"customer_name" : "Darlee Robertson",
						"customer_image" : "assets/img/profiles/avatar-19.jpg",
						"customer_no" : "Facility Manager",
						"reply_date" : "27 Sep 2023",
						"priority" : "0",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"ticket_id" : "#4988",
						"subject" : "verify your email",
						"assigned_name" : "Elizabeth",
						"assigned_image" : "assets/img/profiles/avatar-01.jpg",
						"assigned_date" : "23 Sep 2023",
						"created" : "26 Sep 2023, 12:12 pm",
						"due_date" : "30 Dec 2023",
						"customer_name" : "Sharon Roy",
						"customer_image" : "assets/img/profiles/avatar-20.jpg",
						"customer_no" : "Installer",
						"reply_date" : "30 Sep 2023",
						"priority" : "1",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"ticket_id" : "#4989",
						"subject" : "Calling for help",
						"assigned_name" : "Michel",
						"assigned_image" : "assets/img/profiles/avatar-04.jpg",
						"assigned_date" : "24 Sep 2023",
						"created" : "27 Sep 2023, 12:12 pm",
						"due_date" : "25 Jan 2024",
						"customer_name" : "Vaughan Lewis",
						"customer_image" : "assets/img/profiles/avatar-21.jpg",
						"customer_no" : "Senior  Manager",
						"reply_date" : "01 Oct 2023",
						"priority" : "2",
						"status" : "2",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"ticket_id" : "#4990",
						"subject" : "Management",
						"assigned_name" : "Esther",
						"assigned_image" : "assets/img/profiles/avatar-03.jpg",
						"assigned_date" : "30 Sep 2023",
						"created" : "05 Oct 2023, 11:10 pm",
						"due_date" : "31 Jan 2023",
						"customer_name" : "Jessica Louise",
						"customer_image" : "assets/img/profiles/avatar-23.jpg",
						"customer_no" : "Test Engineer",
						"reply_date" : "10 Oct 2023",
						"priority" : "0",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"ticket_id" : "#4991",
						"subject" : "Calling for help",
						"assigned_name" : "Wilson",
						"assigned_image" : "assets/img/profiles/avatar-05.jpg",
						"assigned_date" : "22 Sep 2023",
						"created" : "25 Sep 2023, 12:12 pm",
						"due_date" : "25 Dec 2023",
						"customer_name" : "Carol Thomas",
						"customer_image" : "assets/img/profiles/avatar-16.jpg",
						"customer_no" : "UI /UX Designer",
						"reply_date" : "27 Sep 2023",
						"priority" : "1",
						"status" : "3",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"ticket_id" : "#4992",
						"subject" : "Support for theme",
						"assigned_name" : "Walter",
						"assigned_image" : "assets/img/profiles/avatar-06.jpg",
						"assigned_date" : "30 Sep 2023",
						"created" : "05 Oct 2023, 12:12 pm",
						"due_date" : "25 Dec 2023",
						"customer_name" : "Dawn Mercha",
						"customer_image" : "assets/img/profiles/avatar-22.jpg",
						"customer_no" : "Technician",
						"reply_date" : "07 Oct 2023",
						"priority" : "2",
						"status" : "1",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "ticket_id" },
				{ "data": "subject" },
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="#" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['assigned_image']+'" alt="User Image"></a><a href="#">'+row['assigned_name']+'</a></h2>';
				}},
				{ "data": "assigned_date" },
				{ "data": "created" },
				{ "data": "due_date" },
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="javascript:void(0);" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['customer_image']+'" alt="User Image"></a><a href="javascript:void(0);" class="d-flex flex-column">'+row['customer_name']+' <span class="text-default">'+row['customer_no']+' </span></a></h2>';
				}},
				{ "data": "reply_date" },
				{ "render": function ( data, type, row ){
					if(row['priority'] == "0") { var class_name = "badge-warning-light";var status_name ="Medium" }else if(row['priority'] == "1") { var class_name = "badge-purple-light";var status_name ="Low" } else { var class_name = "badge-danger-light";var status_name ="High"}
					return '<span class="badge badge-tag '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Resolved" }else if(row['status'] == "1") { var class_name = "bg-info";var status_name ="Closed" }else if(row['status'] == "2") { var class_name = "bg-warning";var status_name ="Pending" } else { var class_name = "bg-danger";var status_name ="Open"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
		});
	}

	// States List

	if($('#states_list').length > 0) {
		$('#states_list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"country_code" : "AS",
						"state_name" : "American Samosa(+684)",
						"country_image":"assets/img/flags/as.png",
						"state": "Swains Island",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"country_code" : "AD",
						"state_name" : "Andorra(+376)",
						"country_image":"assets/img/flags/ad.png",
						"state": "Andorra la Vella",
						"Action" : ""
						
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"country_code" : "AO",
						"state_name" : "Angola(+244)",
						"country_image":"assets/img/flags/ao.png",
						"state": "Benguella",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"country_code" : "AI",
						"state_name" : "Angulila(+1264)",
						"country_image":"assets/img/flags/ai.png",
						"state": "The Valley",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"country_code" : "AQ",
						"state_name" : "Antartica(+672)",
						"country_image":"assets/img/flags/qa.png",
						"state": "Victoria Land",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"country_code" : "AG",
						"state_name" : "Antigua & Barbuda(+1268)",
						"country_image":"assets/img/flags/ag.png",
						"state": "Saint Paul",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"country_code" : "AR",
						"state_name" : "Argentina(+54)",
						"country_image":"assets/img/flags/ar.png",
						"state": "Santa Fe",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"country_code" : "AU",
						"state_name" : "Australia(+61)",
						"country_image":"assets/img/flags/au.png",
						"state": "Queensland",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"country_code" : "AT",
						"state_name" : "Austria(+43)",
						"country_image":"assets/img/flags/at.png",
						"state": "Tyrol",
						"Action" : ""
					}
					,
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"country_code" : "AZ",
						"state_name" : "Azerbaijan(+994)",
						"country_image":"assets/img/flags/az.png",
						"state": "Karabakh",
						"Action" : ""
					}
					
					
				],
		"columns": [
			{ "render": function ( data, type, row ){
				return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
			}},
			{ "render": function ( data, type, row ){
				return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
			}},
			{ "data": "country_code" },
			{ "render": function ( data, type, row ){
				return '<a href="javascript:void(0);" class="table-imgname flag-image">' +
				'<span class="location-flag-img"><img src="'+ row['country_image']+'" class="img-fluid" alt="img"></span>' +
				'<span>'+ row['state_name'] +'</span>'+
				'</a> ';
			}}, 
			{"data": "state" },     
			{ "render": function ( data, type, row ){
				return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_state"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_state"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
			}}
		]
	});
	}

	// membership Transaction

	if($('#transactions_list').length > 0) {
		$('#transactions_list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"type" : "Wallet Topup",
						"amount" : "+$650",
						"date":"25 Sep 2023, 01:22 pm",
						"payment_type":"Paypal",
						"status": "1"
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"type" : "Purchase",
						"amount" : "-350",
						"date":"27 Sep 2023, 04:18 pm",
						"payment_type":"Cash",
						"status": "0"
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"type" : "Refund",
						"amount" : "+$100",
						"date":"29 Sep 2023, 10:08 am",
						"payment_type":"Paypal",
						"status": "1"
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"type" : "Wallet Topup",
						"amount" : "+$650",
						"date":"05 Oct 2023, 09:43 am",
						"payment_type":"Cash",
						"status": "1"
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"type" : "Wallet Topup",
						"amount" : "+$650",
						"date":"17 Oct 2023, 01:22 am",
						"payment_type":"Paypal",
						"status": "0"
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"type" : "Wallet Topup",
						"amount" : "+$650",
						"date":"22 Oct 2023, 06:32 pm",
						"payment_type":"Cash",
						"status": "1"
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select filled"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "type" },
				{ "data": "amount" },
				{ "data": "date" },
				{ "data": "payment_type" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Completed" } if(row['status'] == "1") { var class_name = "bg-success";var status_name ="Completed" } else { var class_name = "bg-danger";var status_name ="Cancel"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
			]
		});
	}

	// Cities List

	if($('#cities_list').length > 0) {
		$('#cities_list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"city_name" : "Gandzasar",
						"country_name" : "American Samosa(+684)",
						"country_image":"assets/img/flags/as.png",
						"state_name": "Swains Island",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"city_name" : "Escaldes-Engordany",
						"country_name" : "Andorra(+376)",
						"country_image":"assets/img/flags/ad.png",
						"state_name": "Andorra la Vella",
						"Action" : ""
						
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"city_name" : "Chissamba",
						"country_name" : "Angola(+244)",
						"country_image":"assets/img/flags/ao.png",
						"state_name": "Benguella",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"city_name" : "Illinois",
						"country_name" : "Angulila(+1264)",
						"country_image":"assets/img/flags/ai.png",
						"state_name": "The Valley",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"city_name" : "Melbourne",
						"country_name" : "Antartica(+672)",
						"country_image":"assets/img/flags/qa.png",
						"state_name": "Victoria Land",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"city_name" : "Maplewood",
						"country_name" : "Antigua & Barbuda(+1268)",
						"country_image":"assets/img/flags/ag.png",
						"state_name": "Saint Paul",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"city_name" : "Rosario",
						"country_name" : "Argentina(+54)",
						"country_image":"assets/img/flags/ar.png",
						"state_name": "Santa Fe",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"city_name" : "Atherton",
						"country_name" : "Australia(+61)",
						"country_image":"assets/img/flags/au.png",
						"state_name": "Queensland",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"city_name" : "Mayrhofen",
						"country_name" : "Austria(+43)",
						"country_image":"assets/img/flags/at.png",
						"state_name": "Tyrol",
						"Action" : ""
					}
					,
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"city_name" : "Askeran",
						"country_name" : "Azerbaijan(+994)",
						"country_image":"assets/img/flags/az.png",
						"state_name": "Karabakh",
						"Action" : ""
					}
					
					
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="javascript:void(0);" class="table-imgname flag-image">' +
					'<span class="location-flag-img"><img src="'+ row['country_image']+'" class="img-fluid" alt="img"></span>' +
					'<span>'+ row['country_name'] +'</span>'+
					'</a> ';
				}},  
				{ "data": "state_name" },
				{ "data": "city_name" },             
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_city"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_city"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
		});
	}

	// Countries List

	if($('#countrieslist').length > 0) {
		$('#countrieslist').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data": [
					{
						"id": 1,
						"si_no": "",
						"select" : "",
						"country_code": "AS",
						"country_id": "684",
						"country_image":"assets/img/flags/as.png",
						"country_name": "American Samoa (+684)",
						"Action": ""
					},
					{
						"id": 2,
						"si_no": "",
						"select" : "",
						"country_code": "AD",
						"country_id": "376",
						"country_image":"assets/img/flags/ad.png",
						"country_name": "Andorra (+376)",
						"Action": ""
					},
					{
						"id": 3,
						"si_no": "",
						"select" : "",
						"country_code": "AO",
						"country_id": "244",
						"country_image":"assets/img/flags/ao.png",
						"country_name": "Angalo (+244)",
						"Action": ""
					},
					{
						"id": 4,
						"si_no": "",
						"select" : "",
						"country_code": "AI",
						"country_id": "1264",
						"country_image":"assets/img/flags/ai.png",
						"country_name": "Anguilla (+1264)",
						"Action": ""
					},
					{
						"id": 5,
						"si_no": "",
						"select" : "",
						"country_code": "AQ",
						"country_id": "672",
						"country_image":"assets/img/flags/qa.png",
						"country_name": "Antarctica (+672)",
						"Action": ""
					},
					{
						"id": 6,
						"si_no": "",
						"select" : "",
						"country_code": "AG",
						"country_id": "1268",
						"country_image":"assets/img/flags/ag.png",
						"country_name": "Antigua & Barbuda (+1268)",
						"Action": ""
					},
					{
						"id": 7,
						"si_no": "",
						"select" : "",
						"country_code": "AR",
						"country_id": "54",
						"country_image":"assets/img/flags/ar.png",
						"country_name": "Argentina (+54)",
						"Action": ""
					},
					{
						"id": 8,
						"si_no": "",
						"select" : "",
						"country_code": "AU",
						"country_id": "61",
						"country_image":"assets/img/flags/au.png",
						"country_name": "Australia (+61)",
						"Action": ""
					},
					{
						"id": 9,
						"si_no": "",
						"select" : "",
						"country_code": "AT",
						"country_id": "43",
						"country_image":"assets/img/flags/at.png",
						"country_name": "Austria (+43)",
						"Action": ""
					},
					{
						"id": 10,
						"si_no": "",
						"select" : "",
						"country_code": "AZ",
						"country_id": "994",
						"country_image":"assets/img/flags/az.png",
						"country_name": "Azerbaijan (+994)",
						"Action": ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "data": "country_code" },
				{ "data": "country_id" },
				{ "render": function ( data, type, row ){
					return '<a href="javascript:void(0);" class="table-imgname flag-image">' +
					'<span class="location-flag-img"><img src="'+ row['country_image']+'" class="img-fluid" alt="img"></span>' +
					'<span>'+ row['country_name'] +'</span>'+
					'</a> ';
				}},               
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_country"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_country"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
		});
	}


	// Contact Reports

	if($('#contact-reports').length > 0) {
		$('#contact-reports').DataTable({
			"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},	
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Darlee Robertson",
						"customer_image" : "assets/img/profiles/avatar-19.jpg",
						"customer_no" : "Facility Manager",
						"phone" : "1234567890",
						"email" : "robertson@example.com",
						"location" : "Germany",
						"tag" : "0",
						"rating" : "4.2",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"owner" : "Hendry Milner",
						"source" : "Paid Social",
						"company_name" : "NovaWave LLC",
						"company_image" : "assets/img/icons/company-icon-01.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Retail Industry",
						"type" : "Customer",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Sharon Roy",
						"customer_image" : "assets/img/profiles/avatar-20.jpg",
						"customer_no" : "Installer",
						"phone" : "+1 989757485",
						"email" : "sharon@example.com",
						"location" : "USA",
						"tag" : "2",
						"rating" : "5.0",
							"created_date" : "29 Sep 2023, 04:15 pm",
							"owner" : "Guilory Berggren",
							"source" : "Referrals",
						"company_name" : "BlueSky Industries",
						"company_image" : "assets/img/icons/company-icon-02.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Banking",
						"type" : "Accounts",
						"status" : "1",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Vaughan Lewis",
						"customer_image" : "assets/img/profiles/avatar-21.jpg",
						"customer_no" : "Senior  Manager",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"location" : "Canada",
						"tag" : "0",
						"rating" : "3.5",
						"created_date" : "04 Oct 2023, 10:18 am",
						"owner" : "Jami Carlile",
						"source" : "Campaigns",
						"company_name" : "SilverHawk",
						"company_image" : "assets/img/icons/company-icon-03.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Hotels",
						"type" : "Partner",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jessica Louise",
						"customer_image" : "assets/img/profiles/avatar-23.jpg",
						"customer_no" : "Test Engineer",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"location" : "India",
						"tag" : "1",
						"rating" : "4.5",
						"created_date" : "17 Oct 2023, 03:31 pm",
							"owner" : "Theresa Nelson",
							"source" : "Google",
						"company_name" : "SummitPeak",
						"company_image" : "assets/img/icons/company-icon-04.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Financial Services",
						"type" : "Prospect",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Carol Thomas",
						"customer_image" : "assets/img/profiles/avatar-16.jpg",
						"customer_no" : "UI /UX Designer",
						"phone" : "+1 124547845",
						"email" : "caroltho3@example.com",
						"location" : "China",
						"tag" : "0",
						"rating" : "4.7",
						"created_date" : "24 Oct 2023, 09:14 pm",
							"owner" : "Smith Cooper",
							"source" : "Paid Social",
						"company_name" : "RiverStone Ventur",
						"company_image" : "assets/img/icons/company-icon-05.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Insurance",
						"type" : "Lead",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Dawn Mercha",
						"customer_image" : "assets/img/profiles/avatar-22.jpg",
						"customer_no" : "Technician",
						"phone" : "+1 478845447",
						"email" : "dawnmercha@example.com",
						"location" : "Martin Lewis",
						"tag" : "1",
						"rating" : "5.0",
						"created_date" : "08 Nov 2023, 09:56 am",
							"owner" : "Martin Lewis",
							"source" : "Referrals",
						"company_name" : "Bright Bridge Grp",
						"company_image" : "assets/img/icons/company-icon-06.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Consulatation",
						"type" : "Influencer",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Rachel Hampton",
						"customer_image" : "assets/img/profiles/avatar-24.jpg",
						"customer_no" : "Software Developer",
						"phone" : "+1 215544845",
						"email" : "rachel@example.com",
						"location" : "Indonesia",
						"tag" : "2",
						"rating" : "3.1",
						"created_date" : "14 Nov 2023, 04:19 pm",
							"owner" : "Newell Egan",
							"source" : "Campaigns",
						"company_name" : "CoastalStar Co.",
						"company_image" : "assets/img/icons/company-icon-07.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Agriculture",
						"type" : "Vendor",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonelle Curtiss",
						"customer_image" : "assets/img/profiles/avatar-25.jpg",
						"customer_no" : "Supervisor",
						"phone" : "+1 121145471",
						"email" : "jonelle@example.com",
						"location" : "Cuba",
						"tag" : "1",
						"rating" : "5.0",
							"created_date" : "23 Nov 2023, 11:14 pm",
							"owner" : "Janet Carlson",
							"source" : "Google",
						"company_name" : "HarborView",
						"company_image" : "assets/img/icons/company-icon-08.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Insurance",
						"type" : "Customer",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Jonathan Smith",
						"customer_image" : "assets/img/profiles/avatar-26.jpg",
						"customer_no" : "Team Lead Dev",
						"phone" : "+1 321454789",
						"email" : "jonathan@example.com",
						"location" : "Isreal",
						"tag" : "0",
						"rating" : "2.7",
						"created_date" : "10 Dec 2023, 06:43 am",
							"owner" : "Craig Brown",
							"source" : "Paid Social",
						"company_name" : "Golden Gate Ltd",
						"company_image" : "assets/img/icons/company-icon-09.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Banking",
						"type" : "Accounts",
						"status" : "0",
						"Action" : ""
					}
					,
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"customer_name" : "Brook Carter",
						"customer_image" : "assets/img/profiles/avatar-01.jpg",
						"customer_no" : "Team Lead Dev ",
						"phone" : "+1 278907145",
						"email" : "brook@example.com",
						"location" : "Colombia",
						"tag" : "2",
						"rating" : "3.0",
						"close_date": "17 Dec 2023",
							"created_date" : "25 Dec 2023, 08:17 pm",
							"owner" : "Daniel Byrne",
							"source" : "Referrals",
						"company_name" : "Redwood Inc",
						"company_image" : "assets/img/icons/company-icon-10.svg",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
							"industry" : "Financial Services",
						"type" : "Influencer",
						"status" : "0",
						"Action" : ""
					}
					
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="contact-details.html" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['customer_image']+'" alt="User Image"></a><a href="contact-details.html" class="d-flex flex-column">'+row['customer_name']+' <span class="text-default">'+row['customer_no']+' </span></a></h2>';
				}},
				{ "data": "phone" },
				{ "data": "email" },
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['company_image']+'" alt="User Image"></a><a href="company-details.html">'+row['company_name']+'</a></h2>';
				}},
				{ "data": "industry" },
				{ "data": "type" },
				{ "data": "source" },
				{ "data": "created_date" }
			]
		});
	}

	// Deal Reports

	if($('#deal_reports').length > 0) {
		$('#deal_reports').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data": [
					{
						"id": 1,
						"Deal_Name": "Collins",
						"Stage": "Qualify To Buy",
						"Deal_Value": "$04,51,000",
						"tag1": "Collab",
						"close_date": "25 Sep 2023",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"owner" : "Hendry Milner",
						"source" : "Paid Social",
						"Probability": "90%",
						"Status": "0"
					},
					{
						"id": 2,
						"Deal_Name": "Konopelski",
						"Stage": "Proposal Made",
						"Deal_Value": "$03,12,500",
						"tag1": "Rated",
						"close_date": "29 Sep 2023",
						"created_date" : "29 Sep 2023, 04:15 pm",
						"owner" : "Guilory Berggren",
						"source" : "Referrals",
						"Probability": "15 %",
						"Status": "1"
					},
					{
						"id": 3,
						"Deal_Name": "Adams",
						"Stage": "Contact Made",
						"Deal_Value": "$04,14,800",
						"tag1": "Rejected",
						"close_date": "04 Oct 2023",
						"created_date" : "04 Oct 2023, 10:18 am",
						"owner" : "Jami Carlile",
						"source" : "Campaigns",
						"Probability": "95 %",
						"Status": "0"
					},
					{
						"id": 4,
						"Deal_Name": "Schumm",
						"Stage": "Qualify To Buy",
						"Deal_Value": "$11,14,400",
						"tag1": "Collab",
						"close_date": "15 Oct 2023",
						"created_date" : "17 Oct 2023, 03:31 pm",
						"owner" : "Theresa Nelson",
						"source" : "Google",
						"Probability": "99 %",
						"Status": "0"
					},
					{
						"id": 5,
						"Deal_Name": "Wisozk",
						"Stage": "Presentation",
						"Deal_Value": "$16,11,400",
						"tag1": "Rated",
						"close_date": "27 Oct 2023",
						"created_date" : "24 Oct 2023, 09:14 pm",
						"owner" : "Smith Cooper",
						"source" : "Paid Social",
						"Probability": "10 %",
						"Status": "2"
					},
					{
						"id": 6,
						"Deal_Name": "Heller",
						"Stage": "Appointment",
						"Deal_Value": "$78,11,800",
						"tag1": "Rated",
						"close_date": "07 Nov 2023",
						"created_date" : "08 Nov 2023, 09:56 am",
						"owner" : "Martin Lewis",
						"source" : "Referrals",
						"Probability": "70 %",
						"Status": "0"
					},
					{
						"id": 7,
						"Deal_Name": "Gutkowski",
						"Stage": "Proposal Made",
						"Deal_Value": "$09,05,947",
						"tag1": "Promotion",
						"close_date": "12 Nov 2023",
						"created_date" : "14 Nov 2023, 04:19 pm",
						"owner" : "Newell Egan",
						"source" : "Campaigns",
						"Probability": "10 %",
						"Status": "2"
					},
					{
						"id": 8,
						"Deal_Name": "Walter",
						"Stage": "Qualify To Buy",
						"Deal_Value": "$04,51,000",
						"tag1": "Rejected",
						"close_date": "23 Nov 2023",
						"created_date" : "23 Nov 2023, 11:14 pm",
						"owner" : "Janet Carlson",
						"source" : "Google",
						"Probability": "90 %",
						"Status": "0"
					},
					{
						"id": 9,
						"Deal_Name": "Hansen",
						"Stage": "Appointment",
						"Deal_Value": "$72,14,078",
						"tag1": "Collab",
						"close_date": "11 Dec 2023",
						"created_date" : "10 Dec 2023, 06:43 am",
						"owner" : "Craig Brown",
						"source" : "Paid Social",
						"Probability": "40 %",
						"Status": "0"
					},
					{
						"id": 10,
						"Deal_Name": "Leuschke",
						"Stage": "Proposal Made",
						"Deal_Value": "$09,05,947",
						"tag1": "Rated",
						"close_date": "17 Dec 2023",
						"created_date" : "25 Dec 2023, 08:17 pm",
						"owner" : "Daniel Byrne",
						"source" : "Referrals",
						"Probability": "47 %",
						"Status": "1"
					}
					],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="deals-details.html" class="title-name">'+row['Deal_Name']+'</a>';
				}},
				{ "data": "Stage" },
				{ "data": "Deal_Value" },
				{ "data": "close_date" },
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['owner']+'</span>';
				}},
				{ "data": "Probability" },
				{ "render": function ( data, type, row ){
					if(row['Status'] == "0") { var class_name = "bg-success";var status_name ="Won" }else if(row['Status'] == "1"){ var class_name = "bg-danger";var status_name ="Lost"} else { var class_name = "bg-purple";var status_name ="open"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "data": "source" },
				{ "data": "created_date" }
			]
		});
	}

	// Leads Reports

	if($('#leads_reports').length > 0) {
		$('#leads_reports').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},	
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Collins",
						"company_name" : "NovaWave LLC",
						"company_image" : "assets/img/icons/company-icon-01.svg",
						"company_address" : "Newyork, USA",
						"phone" : "+1 875455453",
						"email" : "robertson@example.com",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"owner" : "Hendry Milner",
						"source" : "Paid Social",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Konopelski",
						"company_name" : "BlueSky Industries",
						"company_image" : "assets/img/icons/company-icon-02.svg",
						"company_address" : "Winchester, KY",
						"phone" : "+1 989757485",
						"email" : "sharon@example.com",
						"created_date" : "29 Sep 2023, 04:15 pm",
						"owner" : "Guilory Berggren",
						"source" : "Referrals",
						"status" : "2",
						"Action" : ""
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Adams",
						"company_name" : "SilverHawk",
						"company_image" : "assets/img/icons/company-icon-03.svg",
						"company_address" : "Jametown, NY",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"created_date" : "04 Oct 2023, 10:18 am",
						"owner" : "Jami Carlile",
						"source" : "Campaigns",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Schumm",
						"company_name" : "SummitPeak",
						"company_image" : "assets/img/icons/company-icon-04.svg",
						"company_address" : "Compton, RI",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"created_date" : "17 Oct 2023, 03:31 pm",
						"owner" : "Theresa Nelson",
						"source" : "Google",
						"status" : "3",
						"Action" : ""
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Wisozk",
						"company_name" : "RiverStone Ventur",
						"company_image" : "assets/img/icons/company-icon-05.svg",
						"company_address" : "Dayton, OH",
						"phone" : "+1 124547845",
						"email" : "caroltho3@example.com",
						"created_date" : "24 Oct 2023, 09:14 pm",
						"owner" : "Smith Cooper",
						"source" : "Paid Social",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Heller",
						"company_name" : "Bright Bridge Grp",
						"company_image" : "assets/img/icons/company-icon-06.svg",
						"company_address" : "Lafayette, LA",
						"phone" : "+1 478845447",
						"email" : "dawnmercha@example.com",
						"created_date" : "08 Nov 2023, 09:56 am",
						"owner" : "Martin Lewis",
						"source" : "Referrals",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Gutkowski",
						"company_name" : "CoastalStar Co.",
						"company_image" : "assets/img/icons/company-icon-07.svg",
						"company_address" : "Centerville, VA",
						"phone" : "+1 215544845",
						"email" : "rachel@example.com",
						"created_date" : "14 Nov 2023, 04:19 pm",
						"owner" : "Newell Egan",
						"source" : "Campaigns",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Walter",
						"company_name" : "HarborView",
						"company_image" : "assets/img/icons/company-icon-08.svg",
						"company_address" : "Providence, RI",
						"phone" : "+1 121145471",
						"email" : "jonelle@example.com",
						"created_date" : "23 Nov 2023, 11:14 pm",
						"owner" : "Janet Carlson",
						"source" : "Google",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Hansen",
						"company_name" : "Golden Gate Ltd",
						"company_image" : "assets/img/icons/company-icon-09.svg",
						"company_address" : "Swayzee, IN",
						"phone" : "+1 321454789",
						"email" : "jonathan@example.com",
						"created_date" : "10 Dec 2023, 06:43 am",
						"owner" : "Craig Brown",
						"source" : "Paid Social",
						"status" : "0",
						"Action" : ""
					},
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"lead_name" : "Leuschke",
						"company_name" : "Redwood Inc",
						"company_image" : "assets/img/icons/company-icon-10.svg",
						"company_address" : "Florida City, FL",
						"phone" : "+1 278907145",
						"email" : "brook@example.com",
						"created_date" : "25 Dec 2023, 08:17 pm",
						"owner" : "Daniel Byrne",
						"source" : "Referrals",
						"status" : "1",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<a href="leads-details.html" class="title-name">'+row['lead_name']+'</a>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['company_image']+'" alt="User Image"></a><a href="company-details.html" class="d-flex flex-column">'+row['company_name']+'<span class="text-default">'+row['company_address']+' </span></a></h2>';
				}},
				{ "data": "phone" },
				{ "data": "email" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Closed" } else if(row['status'] == "1") { var class_name = "bg-danger";var status_name ="Lost" } else if(row['status'] == "2") { var class_name = "bg-pending";var status_name ="Not Contacted"}
					else { var class_name = "bg-warning";var status_name ="Contacted"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['owner']+'</span>';
				}},
				{ "data": "source" },
				{ "data": "created_date" }
			]
		});
	}

	// Companies List

	if($('#company_reports').length > 0) {
		$('#company_reports').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},	
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"company_name" : "NovaWave LLC",
						"company_image" : "assets/img/icons/company-icon-01.svg",
						"phone" : "+1 875455453",
						"email" : "robertson@example.com",
						"location" : "Germany",
						"tag" : "0",
						"rating" : "4.2",
						"owner" : "Hendry Milner",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Paid Social",
						"won_deals": "5 Deals, $100000",
						"lost_deals": "2 Deals, $80000",
						"created_date": "25 Sep 2023, 01:22 pm"
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"company_name" : "BlueSky Industries",
						"company_image" : "assets/img/icons/company-icon-02.svg",
						"phone" : "+1 989757485",
						"email" : "sharon@example.com",
						"location" : "USA",
						"tag" : "0",
						"rating" : "5.0",
						"owner" : "Guilory Berggren",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "1",
						"Action" : "",
						"source": "Referrals",
						"won_deals": "4 Deals, $120000",
						"lost_deals": "3 Deals, $90000",
						"created_date": "29 Sep 2023, 04:15 pm"
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"company_name" : "SilverHawk",
						"company_image" : "assets/img/icons/company-icon-03.svg",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"location" : "Canada",
						"tag" : "0",
						"rating" : "3.5",
						"owner" : "Jami Carlile",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Campaigns",
						"won_deals": "3 Deals, $110000",
						"lost_deals": "2 Deals, $70000",
						"created_date": "04 Oct 2023, 10:18 am"
					},
					{
						"id" : 4,
						"si_no" : "",
						"select" : "",
						"company_name" : "SummitPeak",
						"company_image" : "assets/img/icons/company-icon-04.svg",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"location" : "India",
						"tag" : "0",
						"rating" : "4.5",
						"owner" : "Theresa Nelson",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Google",
						"won_deals": "6 Deals, $200000",
						"lost_deals": "3 Deals, $100000",
						"created_date": "17 Oct 2023, 03:31 pm"
					},
					{
						"id" : 5,
						"si_no" : "",
						"select" : "",
						"company_name" : "RiverStone Ventur",
						"company_image" : "assets/img/icons/company-icon-05.svg",
						"phone" : "+1 124547845",
						"email" : "caroltho3@example.com",
						"location" : "China",
						"tag" : "0",
						"rating" : "4.7",
						"owner" : "Smith Cooper",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Paid Social",
						"won_deals": "3 Deals, $80000",
						"lost_deals": "1 Deal, $40000",
						"created_date": "24 Oct 2023, 09:14 pm"
					},
					{
						"id" : 6,
						"si_no" : "",
						"select" : "",
						"company_name" : "Bright Bridge Grp",
						"company_image" : "assets/img/icons/company-icon-06.svg",
						"phone" : "+1 478845447",
						"email" : "dawnmercha@example.com",
						"location" : "Martin Lewis",
						"tag" : "0",
						"rating" : "5.0",
						"owner" : "Martin Lewis",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Referrals",
						"won_deals": "5 Deals, $95000",
						"lost_deals": "2 Deals, $60000",
						"created_date": "08 Nov 2023, 09:56 am"
					},
					{
						"id" : 7,
						"si_no" : "",
						"select" : "",
						"company_name" : "CoastalStar Co.",
						"company_image" : "assets/img/icons/company-icon-07.svg",
						"phone" : "+1 215544845",
						"email" : "rachel@example.com",
						"location" : "Indonesia",
						"tag" : "0",
						"rating" : "3.1",
						"owner" : "Newell Egan",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Campaigns",
						"won_deals": "4 Deals, $100000",
						"lost_deals": "1 Deal, $50000",
						"created_date": "14 Nov 2023, 04:19 pm"
					},
					{
						"id" : 8,
						"si_no" : "",
						"select" : "",
						"company_name" : "HarborView",
						"company_image" : "assets/img/icons/company-icon-08.svg",
						"phone" : "+1 121145471",
						"email" : "jonelle@example.com",
						"location" : "Cuba",
						"tag" : "2",
						"rating" : "5.0",
						"owner" : "Janet Carlson",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Google",
						"won_deals": "3 Deals, $70000",
						"lost_deals": "3 Deals, $80000",
						"created_date": "23 Nov 2023, 11:14 pm"
					},
					{
						"id" : 9,
						"si_no" : "",
						"select" : "",
						"company_name" : "Golden Gate Ltd",
						"company_image" : "assets/img/icons/company-icon-09.svg",
						"phone" : "+1 321454789",
						"email" : "jonathan@example.com",
						"location" : "Isreal",
						"tag" : "2",
						"rating" : "2.7",
						"owner" : "Craig Brown",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Referrals",
						"won_deals": "6 Deals, $130000",
						"lost_deals": "4 Deals, $100000",
						"created_date": "10 Dec 2023, 06:43 am"
					},
					{
						"id" : 10,
						"si_no" : "",
						"select" : "",
						"company_name" : "Redwood Inc",
						"company_image" : "assets/img/icons/company-icon-10.svg",
						"phone" : "+1 278907145",
						"email" : "brook@example.com",
						"location" : "Colombia",
						"tag" : "2",
						"rating" : "3.0",
						"owner" : "Daniel Byrne",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Campaigns",
						"won_deals": "5 Deals, $90000",
						"lost_deals": "2 Deals, $55000",
						"created_date": "25 Dec 2023, 08:17 pm"
					},
					{
						"id" : 11,
						"si_no" : "",
						"select" : "",
						"company_name" : "SilverHawk",
						"company_image" : "assets/img/icons/company-icon-03.svg",
						"phone" : "+1 546555455",
						"email" : "vaughan12@example.com",
						"location" : "Canada",
						"tag" : "0",
						"rating" : "3.5",
						"owner" : "Jami Carlile",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Paid Social",
						"won_deals": "5 Deals, $100000",
						"lost_deals": "2 Deals, $80000",
						"created_date": "25 Sep 2023, 01:22 pm"
					},
					{
						"id" : 12,
						"si_no" : "",
						"select" : "",
						"company_name" : "SummitPeak",
						"company_image" : "assets/img/icons/company-icon-04.svg",
						"phone" : "+1 454478787",
						"email" : "jessica13@example.com",
						"location" : "India",
						"tag" : "0",
						"rating" : "4.5",
						"owner" : "Theresa Nelson",
						"owner_image": "assets/img/profiles/avatar-14.jpg",
						"status" : "0",
						"Action" : "",
						"source": "Google",
						"won_deals": "3 Deals, $70000",
						"lost_deals": "3 Deals, $80000",
						"created_date": "23 Nov 2023, 11:14 pm"
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['company_image']+'" alt="User Image"></a><a href="company-details.html">'+row['company_name']+'</a></h2>';
				}},
				{ "data": "phone" },
				{ "data": "email" },
				{ "data": "location" },
				{ "render": function ( data, type, row ){
						return '<span class="title-name">'+row['owner']+'</span>';
				}},
				{ "data": "source" },
				{ "data": "won_deals" },
				{ "data": "lost_deals" },
				{ "data": "created_date" }
			]
		});
	}

	// Projects List

	if($('#project-reports').length > 0) {
		$('#project-reports').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "#12145",
						"si_no" : "",
						"star" : "",
						"name" : "Truelysell",
						"client" : "NovaWave LLC",
						"pro_img" : "assets/img/priority/truellysel.svg",
						"client_img": "assets/img/icons/company-icon-01.svg",
						"piority" : "0",
						"start_date" : "25 Sep 2023",
						"end_date" : "15 Oct 2023",
						"stage" : "3",
						"type" : "Web App",
						"status" : "0",
						"value": "$03,50,000",
						"hrs": "100",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$200000",
						"currently_spend": "$40000",
						"Action" : ""
					},
					{
						"id" : "#12146",
						"si_no" : "",
						"star" : "",
						"name" : "Dreamschat",
						"client" : "BlueSky Industries",
						"pro_img" : "assets/img/priority/dreamchat.svg",
						"client_img": "assets/img/icons/company-icon-02.svg",
						"piority" : "0",
						"start_date" : "29 Sep 2023",
						"end_date" : "19 Oct 2023",
						"stage" : "1",
						"type" : "Web App",
						"status" : "1",
						"value": "$02,15,000",
						"hrs": "80",
						"mem_image1" : "assets/img/profiles/avatar-03.jpg",
						"mem_image2": "assets/img/profiles/avatar-05.jpg",
						"mem_image3": "assets/img/profiles/avatar-06.jpg",
						"budget": "$300000",
						"currently_spend": "$120000",
						"Action" : ""
					},
					{
						"id" : "#12147",
						"si_no" : "",
						"star" : "",
						"name" : "Truelysell",
						"client" : "SilverHawk",
						"pro_img" : "assets/img/priority/truellysell.svg",
						"client_img": "assets/img/icons/company-icon-03.svg",
						"piority" : "0",
						"start_date" : "05 Oct 2023",
						"end_date" : "12 Oct 2023",
						"stage" : "0",
						"type" : "Web App",
						"status" : "0",
						"value": "$01,45,000",
						"hrs": "75",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-01.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$200000",
						"currently_spend": "$200000",
						"Action" : ""
					},
					{
						"id" : "#12148",
						"si_no" : "",
						"star" : "",
						"name" : "Servbook",
						"client" : "SummitPeak",
						"pro_img" : "assets/img/priority/servbook.svg",
						"client_img": "assets/img/icons/company-icon-04.svg",
						"piority" : "0",
						"start_date" : "14 Oct 2023",
						"end_date" : "24 Oct 2023",
						"stage" : "2",
						"type" : "Web App",
						"status" : "1",
						"value": "$02,15,000",
						"hrs": "60",
						"mem_image1" : "assets/img/profiles/avatar-12.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-13.jpg",
						"budget": "$300000",
						"currently_spend": "$60000",
						"Action" : ""
					},
					{
						"id" : "#12149",
						"si_no" : "",
						"star" : "",
						"name" : "DreamPOS",
						"client" : "RiverStone Ventur",
						"pro_img" : "assets/img/priority/dream-pos.svg",
						"client_img": "assets/img/icons/company-icon-05.svg",
						"piority" : "0",
						"start_date" : "15 Nov 2023",
						"end_date" : "22 Nov 2023",
						"stage" : "2",
						"type" : "Web App",
						"status" : "2",
						"value": "$03,64,000",
						"hrs": "72",
						"mem_image1" : "assets/img/profiles/avatar-10.jpg",
						"mem_image2": "assets/img/profiles/avatar-11.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$120000",
						"currently_spend": "$40000",
						"Action" : ""
					},
					{
						"id" : "#12150",
						"si_no" : "",
						"star" : "",
						"name" : "Kofejob",
						"client" : "CoastalStar Co.",
						"pro_img" : "assets/img/priority/project-01.svg",
						"client_img": "assets/img/icons/company-icon-06.svg",
						"piority" : "0",
						"start_date" : "25 Nov 2023",
						"end_date" : "09 Dec 2023",
						"stage" : "1",
						"type" : "Meeting",
						"status" : "0",
						"value": "$02,12,000",
						"hrs": "96",
						"mem_image1" : "assets/img/profiles/avatar-14.jpg",
						"mem_image2": "assets/img/profiles/avatar-09.jpg",
						"mem_image3": "assets/img/profiles/avatar-08.jpg",
						"budget": "$200000",
						"currently_spend": "$90000",
						"Action" : ""
					},
					{
						"id" : "#12151",
						"si_no" : "",
						"star" : "",
						"name" : "Doccure",
						"client" : "HarborView",
						"pro_img" : "assets/img/priority/project-02.svg",
						"client_img": "assets/img/icons/company-icon-07.svg",
						"piority" : "0",
						"start_date" : "08 Dec 2023",
						"end_date" : "16 Dec 2023",
						"stage" : "0",
						"type" : "Web App",
						"status" : "1",
						"value": "$04,18,000",
						"hrs": "85",
						"mem_image1" : "assets/img/profiles/avatar-06.jpg",
						"mem_image2": "assets/img/profiles/avatar-07.jpg",
						"mem_image3": "assets/img/profiles/avatar-16.jpg",
						"budget": "$200000",
						"currently_spend": "$195000",
						"Action" : ""
					},
					{
						"id" : "#12152",
						"si_no" : "",
						"star" : "",
						"name" : "Best@laundry",
						"client" : "Golden Gate Ltd",
						"pro_img" : "assets/img/priority/best.svg",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"piority" : "0",
						"start_date" : "21 Dec 2023",
						"end_date" : "13 Jan 2024",
						"stage" : "0",
						"type" : "Meeting",
						"status" : "2",
						"value": "$01,23,000",
						"hrs": "65",
						"mem_image1" : "assets/img/profiles/avatar-04.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-05.jpg",
						"budget": "$230000",
						"currently_spend": "$220000",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "POS",
						"client" : "CoastalStar Inc",
						"pro_img" : "assets/img/priority/dream-pos.svg",
						"client_img": "assets/img/icons/company-icon-06.svg",
						"piority" : "0",
						"start_date" : "01 Jan 2024",
						"end_date" : "11 Jan 2024",
						"stage" : "1",
						"type" : "Web App",
						"status" : "1",
						"value": "$03,64,000",
						"hrs": "60",
						"mem_image1" : "assets/img/profiles/avatar-08.jpg",
						"mem_image2": "assets/img/profiles/avatar-12.jpg",
						"mem_image3": "assets/img/profiles/avatar-04.jpg",
						"budget": "$200000",
						"currently_spend": "$177777 ",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "Bookserv",
						"client" : "Redwood Inc",
						"pro_img" : "assets/img/priority/servbook.svg",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"piority" : "0",
						"start_date" : "12 Jan 2024",
						"end_date" : "29 Jan 2024",
						"stage" : "1",
						"type" : "Meeting",
						"status" : "1",
						"value": " $04,10,000",
						"hrs": "56",
						"mem_image1" : "assets/img/profiles/avatar-12.jpg",
						"mem_image2": "assets/img/profiles/avatar-14.jpg",
						"mem_image3": "assets/img/profiles/avatar-01.jpg",
						"budget": "$300000",
						"currently_spend": "$100000 ",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "Dreamchat",
						"client" : "Redwood Inc",
						"pro_img" : "assets/img/priority/sports.svg",
						"client_img": "assets/img/icons/company-icon-09.svg",
						"piority" : "0",
						"start_date" : "16 Jan 2024",
						"end_date" : "25 Jan 2024",
						"stage" : "1",
						"type" : "Meeting",
						"status" : "1",
						"value": "$02,19,000",
						"hrs": "55",
						"mem_image1" : "assets/img/profiles/avatar-08.jpg",
						"mem_image2": "assets/img/profiles/avatar-15.jpg",
						"mem_image3": "assets/img/profiles/avatar-12.jpg",
						"budget": "$400000",
						"currently_spend": "$200000 ",
						"Action" : ""
					},
					{
						"id" : "#12153",
						"si_no" : "",
						"star" : "",
						"name" : "Sports",
						"client" : "Ventur",
						"pro_img" : "assets/img/priority/best.svg",
						"client_img": "assets/img/icons/company-icon-08.svg",
						"piority" : "0",
						"start_date" : "12 Jan 2024",
						"end_date" : "29 Jan 2024",
						"stage" : "1",
						"type" : "Web App",
						"status" : "1",
						"value": "$01,23,000",
						"hrs": "63",
						"mem_image1" : "assets/img/profiles/avatar-01.jpg",
						"mem_image2": "assets/img/profiles/avatar-11.jpg",
						"mem_image3": "assets/img/profiles/avatar-14.jpg",
						"budget": "$300000",
						"currently_spend": "$100000 ",
						"Action" : ""
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="project-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['pro_img']+'" alt="User Image"></a><a href="project-details.html">'+row['name']+'</a></h2>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="company-details.html" class="avatar avatar-sm border me-2"><img class="w-auto h-auto" src="'+row['client_img']+'" alt="User Image"></a><a href="company-details.html">'+row['client']+'</a></h2>';
				}},   
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "danger";var status_name ="High" } else if(row['status'] == "1") { var class_name = "warning";var status_name ="Medium" }  else { var class_name = "success";var status_name ="Low"}
					return '<span class="priority badge badge-tag badge-'+class_name+'-light" ><i class="ti ti-square-rounded-filled"></i>'+status_name+'</span>';
				}},    
				{ "data": "start_date" },                 
				{ "data": "end_date" },
				{ "data": "type" },
				{
					"render": function (data, type, row) {
							if(row['stage'] == "0") { var class_name = "success";var status_name ="Completed" } else if(row['stage'] == "1") { var class_name = "info";var status_name ="Develop" } else if(row['stage'] == "2") { var class_name = "warning";var status_name ="Design"}  else  { var class_name = "violet";var status_name ="Plan"}
					return '<div class="pipeline-progress d-flex align-items-center"><div class="progress"><div class="progress-bar progress-bar-'+class_name+'" role="progressbar"></div></div><span>'+status_name+'</span></div>';
					}
				}, 
				{ "data": "budget" },
				{ "data": "currently_spend" }
			]
				
		});
	}

		// Task List

	if($('#task-reports').length > 0) {
		$('#task-reports').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "1",
						"si_no" : "",
						"star" : "",
						"task_name" : "Add a form to Update Task",
						"piority" : "0",
						"start_date" : "25 Sep 2023",
						"type" : "Calls",
						"status" : "1",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "2",
						"si_no" : "",
						"star" : "",
						"task_name" : "Make all strokes thinner",
						"piority" : "1",
						"start_date" : "29 Sep 2023",
						"type" : "Meeting",
						"status" : "0",
						"created_date" : "29 Sep 2023, 04:15 pm",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "3",
						"si_no" : "",
						"star" : "",
						"task_name" : "Update orginal contentuelysell",
						"piority" : "0",
						"start_date" : "05 Oct 2023",
						"type" : "Email",
						"status" : "1",
						"created_date" : "04 Oct 2023, 10:18 am",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "4",
						"si_no" : "",
						"star" : "",
						"task_name" : "Use only component colours",
						"piority" : "1",
						"start_date" : "14 Oct 2023",
						"type" : "Meeting",
						"status" : "0",
						"created_date" : "17 Oct 2023, 03:31 pm",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "5",
						"si_no" : "",
						"star" : "",
						"task_name" : "Add images to the cards section",
						"piority" : "2",
						"start_date" : "15 Nov 2023",
						"type" : "Task",
						"status" : "1",
						"created_date" : "24 Oct 2023, 09:14 pm",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "6",
						"si_no" : "",
						"star" : "",
						"task_name" : "Design description banner & landing page",
						"piority" : "0",
						"start_date" : "25 Nov 2023",
						"type" : "Calls",
						"status" : "0",
						"created_date" : "08 Nov 2023, 09:56 am",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "7",
						"si_no" : "",
						"star" : "",
						"task_name" : "Make sure all the padding should be 24px",
						"piority" : "2",
						"start_date" : "08 Dec 2023",
						"type" : "Email",
						"status" : "0",
						"created_date" : "14 Nov 2023, 04:19 pm",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "8",
						"si_no" : "",
						"star" : "",
						"task_name" : "Use border radius as 5px or 10 px",
						"piority" : "1",
						"start_date" : "21 Dec 2023",
						"type" : "Task",
						"status" : "0",
						"created_date" : "23 Nov 2023, 11:14 pm",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					},
					{
						"id" : "9",
						"si_no" : "",
						"star" : "",
						"task_name" : "Use Grey scale colors as body color",
						"piority" : "1",
						"start_date" : "21 Dec 2023",
						"type" : "Meeting",
						"status" : "1",
						"created_date" : "10 Dec 2023, 06:43 am",
						"img" : "assets/img/profiles/avatar-14.jpg",
						"assignee": "Adrian Davies"
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['task_name']+'</span>';
				}},
				{ "render": function ( data, type, row ){
					return '<h2 class="d-flex align-items-center"><a href="javascript:void(0);" class="avatar avatar-sm me-2"><img class="w-auto h-auto" src="'+row['img']+'" alt="User Image"></a><a href="javascript:void(0);">'+row['assignee']+'</a></h2>';
				}},	  
				{ "render": function ( data, type, row ){
					if(row['piority'] == "0") { var class_name = "danger";var status_name ="High" } else if(row['piority'] == "1") { var class_name = "warning";var status_name ="Medium" }  else { var class_name = "success";var status_name ="Low"}
					return '<span class="priority badge badge-tag badge-'+class_name+'-light" ><i class="ti ti-square-rounded-filled"></i>'+status_name+'</span>';
				}},    
				{ "data": "start_date" },   	
				{ "data": "type" },
				{
					"render": function (data, type, row) {
							if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Completed" } else { var class_name = "bg-warning";var status_name ="Inprogress"}
				return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
					}
				}, 
				{ "data": "created_date" }
			]
				
		});
	}		

	// Calls List

	if($('#calls-list').length > 0) {
		$('#calls-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "1",
						"si_no" : "",
						"title" : "Busy",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "2",
						"si_no" : "",
						"title" : "No Answer",
						"created_date" : "29 Sep 2023, 10:20 pm",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "3",
						"si_no" : "",
						"title" : "Wrong Number",
						"created_date" : "04 Oct 2023, 08:30 am",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "4",
						"si_no" : "",
						"title" : "Unavailable",
						"created_date" : "17 Oct 2023, 11:45 am",
						"status" : "1",
						"action" : ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['title']+'</span>';
				}},
				{ "data": "created_date" },
				{
					"render": function (data, type, row) {
							if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
				return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
					}
				}, 
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_calls"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_calls"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
				
		});
	}

	// Industry List

	if($('#industry-list').length > 0) {
		$('#industry-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "1",
						"si_no" : "",
						"title" : "Retail Industry",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "2",
						"si_no" : "",
						"title" : "Banking",
						"created_date" : "29 Sep 2023, 10:20 pm",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "3",
						"si_no" : "",
						"title" : "Hotels",
						"created_date" : "04 Oct 2023, 08:30 am",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "4",
						"si_no" : "",
						"title" : "Financial Services",
						"created_date" : "17 Oct 2023, 11:45 am",
						"status" : "1",
						"action" : ""
					},
					{
						"id" : "5",
						"si_no" : "",
						"title" : "Insurance",
						"created_date" : "26 Oct 2023, 04:10 pm",
						"status" : "1",
						"action" : ""
					},
					{
						"id" : "6",
						"si_no" : "",
						"title" : "Consulting",
						"created_date" : "08 Nov 2023, 05:23 am",
						"status" : "1",
						"action" : ""
					},
					{
						"id" : "7",
						"si_no" : "",
						"title" : "Agriculture",
						"created_date" : "11 Nov 2023, 02:32 pm",
						"status" : "1",
						"action" : ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['title']+'</span>';
				}},
				{ "data": "created_date" },
				{
					"render": function (data, type, row) {
							if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
				return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
					}
				}, 
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_industry"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_industry"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
				
		});
	}

	// Contact Stage

	if($('#contact-stage').length > 0) {
		$('#contact-stage').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "1",
						"si_no" : "",
						"title" : "Contacted",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"status" : "Active",
						"action" : ""
					},
					{
						"id" : "2",
						"si_no" : "",
						"title" : "Not Contacted",
						"created_date" : "29 Sep 2023, 10:20 pm",
						"status" : "Active",
						"action" : ""
					},
					{
						"id" : "3",
						"si_no" : "",
						"title" : "Closed",
						"created_date" : "04 Oct 2023, 08:30 am",
						"status" : "Active",
						"action" : ""
					},
					{
						"id" : "4",
						"si_no" : "",
						"title" : "Lost",
						"created_date" : "17 Oct 2023, 11:45 am",
						"status" : "Inactive",
						"action" : ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['title']+'</span>';
				}},
				{ "data": "created_date" },
				{
					"render": function (data, type, row) {
							if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
				return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
					}
				}, 
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_contact_stage"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact_stage"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
				
		});
	}

	// Lost Reason

	if($('#reason-list').length > 0) {
		$('#reason-list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : "1",
						"si_no" : "",
						"title" : "Client went silent",
						"created_date" : "25 Sep 2023, 01:22 pm",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "2",
						"si_no" : "",
						"title" : "Don't have the budget",
						"created_date" : "29 Sep 2023, 10:20 pm",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "3",
						"si_no" : "",
						"title" : "Doesn't pick up the phone, doesn't respond",
						"created_date" : "04 Oct 2023, 08:30 am",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "4",
						"si_no" : "",
						"title" : "Lack of expertise",
						"created_date" : "17 Oct 2023, 11:45 am",
						"status" : "1",
						"action" : ""
					},
					{
						"id" : "5",
						"si_no" : "",
						"title" : "Not responsible",
						"created_date" : "26 Oct 2023, 04:10 pm",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "6",
						"si_no" : "",
						"title" : "They couldn't afford our services",
						"created_date" : "08 Nov 2023, 05:23 am",
						"status" : "0",
						"action" : ""
					},
					{
						"id" : "7",
						"si_no" : "",
						"title" : "Went with our competitor",
						"created_date" : "11 Nov 2023, 02:32 pm",
						"status" : "0",
						"action" : ""
					}
			
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['title']+'</span>';
				}},
				{ "data": "created_date" },
				{
					"render": function (data, type, row) {
							if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
				return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
					}
				}, 
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_reason"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_reason"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
				
		});
	}

	// Page List

	if($('#pages').length > 0) {
		$('#pages').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
						next: 'Next <i class=" fa fa-angle-right"></i> ',
						previous: '<i class="fa fa-angle-left"></i> Prev '
					},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"pages" :"Home",
						"page_slug" : "home",
						"status" : "0"
						
					},
					{
						"id" : 2,
						"pages" :"About Us",
						"page_slug" : "about-us",
						"status" : "1"
						
					},
					{
						"id" : 3,
						"pages" :"FAQ",
						"page_slug" : "faq",
						"status" : "0"
						
					},
					{
						"id" : 4,
						"pages" :"Categories",
						"page_slug" : "categories",
						"status" : "0"
						
					},
					{
						"id" : 5,
						"pages" :"Terms & Conditions",
						"page_slug" : "terms-conditions",
						"status" : "0"
						
					},
					{
						"id" : 6,
						"pages" :"Privacy Policy",
						"page_slug" : "privacy policy",
						"status" : "0"
						
					},
					{
						"id" : 7,
						"pages" :"Contact US",
						"page_slug" : "contact-us",
						"status" : "0"
						
					}
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<label class="checkboxs"><input type="checkbox"><span class="checkmarks"></span></label>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select"><i class="fa fa-star"></i></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<span class="title-name">'+row['pages']+'</span>';
				}},
				{ "data": "page_slug" },
				{
					"render": function (data, type, row) {
							if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Active" } else { var class_name = "bg-danger";var status_name ="Inactive"}
				return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
					}
				}, 
				{ "render": function ( data, type, row ){
					return '<div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_page"><i class="ti ti-trash text-danger"></i> Delete</a></div></div>';
				}}
			]
				
		});
	}

});