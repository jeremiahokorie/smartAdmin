export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			'items': [
				{
					'title': 'Features',
					'root': true,
					'icon-': 'flaticon-line-graph',
					'toggle': 'click',
					'alignment': 'left',
					'translate': 'MENU.FEATURES',
					'submenu': {
						'type': 'mega',
						'width': '1000px',
						'alignment': 'left',
						'columns': [
							{
								'heading': {
									'heading': true,
									'title': 'Task Reports',
									'bullet': 'dot'
								},
								'items': [
									{
										'title': 'Latest Tasks',
										'icon': 'flaticon-map'
									},
									{
										'title': 'Pending Tasks',
										'icon': 'flaticon-user'
									},
									{
										'title': 'Urgent Tasks',
										'icon': 'flaticon-clipboard'
									},
									{
										'title': 'Completed Tasks',
										'icon': 'flaticon-graphic-1'
									},
									{
										'title': 'Failed Tasks',
										'icon': 'flaticon-graphic-2'
									}
								]
							},
							{
								'bullet': 'line',
								'heading': {
									'heading': true,
									'title': 'Profit Margins',
									'bullet': 'dot'
								},
								'items': [
									{
										'title': 'Overall Profits',
										'icon': ''
									},
									{
										'title': 'Gross Profits',
										'icon': ''
									},
									{
										'title': 'Nett Profits',
										'icon': ''
									},
									{
										'title': 'Year to Date Reports',
										'icon': ''
									},
									{
										'title': 'Quarterly Profits',
										'icon': ''
									},
									{
										'title': 'Monthly Profits',
										'icon': ''
									}
								]
							},
							{
								'bullet': 'dot',
								'heading': {
									'heading': true,
									'title': 'Staff Management',
									'bullet': 'dot'
								},
								'items': [
									{
										'title': 'Top Management',
										'icon': ''
									},
									{
										'title': 'Project Managers',
										'icon': ''
									},
									{
										'title': 'Development Staff',
										'icon': ''
									},
									{
										'title': 'Customer Service',
										'icon': ''
									},
									{
										'title': 'Sales and Marketing',
										'icon': ''
									},
									{
										'title': 'Executives',
										'icon': ''
									}
								]
							},
							{
								'heading': {
									'heading': true,
									'title': 'Tools',
									'icon': '',
									'bullet': 'dot'
								},
								'items': [
									{
										'title': 'Analytical Reports',
										'icon': ''
									},
									{
										'title': 'Customer CRM',
										'icon': ''
									},
									{
										'title': 'Operational Growth',
										'icon': ''
									},
									{
										'title': 'Social Media Presence',
										'icon': ''
									},
									{
										'title': 'Files and Directories',
										'icon': ''
									},
									{
										'title': 'Audit & Logs',
										'icon': ''
									}
								]
							}
						]
					}
				},
				{
					'title': 'Apps',
					'root': true,
					'icon-': 'flaticon-paper-plane',
					'toggle': 'click',
					'alignment': 'left',
					'translate': 'MENU.APPS',
					'submenu': {
						'type': 'classic',
						'alignment': 'left',
						'items': [
							{
								'title': 'Reporting',
								'icon': 'flaticon-business'
							},
							{
								'title': 'Social Presence',
								'page': 'components/datatable_v1',
								'icon': 'flaticon-computer',
								'submenu': {
									'type': 'classic',
									'alignment': 'right',
									'items': [
										{
											'title': 'Reached Users',
											'icon': 'flaticon-users'
										},
										{
											'title': 'SEO Ranking',
											'icon': 'flaticon-interface-1'
										},
										{
											'title': 'User Dropout Points',
											'icon': 'flaticon-lifebuoy'
										},
										{
											'title': 'Market Segments',
											'icon': 'flaticon-graphic-1'
										},
										{
											'title': 'Opportunity Growth',
											'icon': 'flaticon-graphic'
										}
									]
								}
							},
							{
								'title': 'Sales & Marketing',
								'icon': 'flaticon-map'
							},
							{
								'title': 'Campaigns',
								'icon': 'flaticon-graphic-2',
								'badge': {
									'type': 'kt-badge--success',
									'value': '3'
								}
							},
							{
								'title': 'Deployment Center',
								'page': '',
								'icon': 'flaticon-infinity',
								'submenu': {
									'type': 'classic',
									'alignment': 'right',
									'items': [
										{
											'title': 'Merge Branch',
											'icon': 'flaticon-add',
											'badge': {
												'type': 'kt-badge--danger',
												'value': '3'
											}
										},
										{
											'title': 'Version Controls',
											'icon': 'flaticon-signs-1'
										},
										{
											'title': 'Database Manager',
											'icon': 'flaticon-folder'
										},
										{
											'title': 'System Settings',
											'icon': 'flaticon-cogwheel-2'
										}
									]
								}
							}
						]
					}
				}
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Home',
					root: true,
					icon: 'flaticon2-home',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: 'Profile', // <= Title of the page
					desc: 'Some my description goes here', // <= Description of the page
					root: true,
					page: 'my-page', // <= URL
					icon: 'flaticon-line-graph' // <= Choose the icon
				},
				{
					title: 'User Management',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Users',
							page: 'user-management/users'
						},
						{
							title: 'Roles',
							page: 'user-management/roles'
						}
					]
				},
				{section: 'Custom'},
				{
					title: 'Error Pages',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-attention',
					submenu: [
						{
							title: 'Error Page - 1',
							page: 'error/error-v1'
						},
						{
							title: 'Error Page - 2',
							page: 'error/error-v2'
						},
						{
							title: 'Error Page - 3',
							page: 'error/error-v3'
						},
						{
							title: 'Error Page - 4',
							page: 'error/error-v4'
						},
						{
							title: 'Error Page - 5',
							page: 'error/error-v5'
						},
						{
							title: 'Error Page - 6',
							page: 'error/error-v6'
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
