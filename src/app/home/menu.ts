export let GENERAL_MENU_ITEM = 
  [
   //forloop
    {
        path: 'mdi/general/reports/',
        title: 'Rough Reports',
        icon: 'line-chart',
        children:
        [
            {                
                path: 'LotTracking',
                title: 'Rough Tracking',
            },
            {                
                path: 'RoughPlunges',
                title: 'Rough Plunges',
            },
        ]
    },
    {
        path: 'mdi/general/Rapo/',
        title: 'Rapo',
        icon: 'line-chart',
        children:
        [
            {                
                path: 'Rapo Calc',
                title: 'Rough Tracking',
            },
        ]
    },
  //
    {
        path: 'ui',
        title: 'UI Element',
        icon: 'paint-brush',
        children:
        [
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },            
            {
                path: 'switch',
                title: 'Switch'
            },
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'loading',
                title: 'Loading'
            },            
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'progress-bar',
                title: 'Progress Bars'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            }
        ]
    },    
];


export let STORE_MENU_ITEM = 
[   
    {
        path: 'mdi/store',
        title: 'Store',
        icon: 'shopping-basket',
    },
    {
        path: 'mdi/store/charts/',
        title: 'Store Charts',
        icon: 'line-chart',
        children:
        [
            {                
              path: 'Rpt1Requisition',
              title: 'Requisition',
            },
            {
              path: 'StoreConsumptionRpt',
              title: 'Consumption',
            },
            {
              path: 'StoreComparisonRpt',
              title: 'Comparison',
            }
        ]
    }, 
];


export let PREDICTION_MENU_ITEM = 
[   
    {
        path: 'mdi/',
        title: 'Predict',
        icon: 'shopping-basket',
        children:
        [
            {
                path: 'predict',
                title: 'Predict'
            },
        ]
    },    
];

export let LAB_MENU_ITEM = 
[   
    {
        path: 'mdi/lab/',
        title: 'Lab',
        icon: 'shopping-basket',
        children:
        [
            {
                path: 'main',
                title: 'Main',                
            },
            {
                path: 'giaupload',
                title: 'Gia Upload',                
            },
        ]
    },    
];


export let MASTER_MENU_ITEM =
[
  {
      path: 'master/',
      title: 'Admin',
      icon: 'user',
      children:
      [
        {
          path: 'userrightmaster',
          title: 'User Rights Master',
        },          
      ]
  },    
];
