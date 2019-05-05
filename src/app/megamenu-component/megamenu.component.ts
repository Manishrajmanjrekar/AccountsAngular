import {
    Component,
    OnInit
} from '@angular/core';
import { MenuItem } from '../common/api';

@Component({
    selector: 'app-megamenu',
    templateUrl: './megamenu.component.html'
})

export class MegamenuComponent {
    menuitems: MenuItem[];

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.menuitems = [
            {
                label: 'Sales', icon: 'fa fa-fw fa-check',
                items: [
                    [
                        {
                            label: 'Add Sales',
                            items: [{ label: 'Add Sale', routerLink: ['sales'] }, { label: 'Customer', routerLink: ['customer'] }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Test',
                            items: [{ label: 'Test 1', routerLink: ['test1'] },
                            { label: 'Test 2' , routerLink: ['test2']}]
                        },
                        {
                            label: 'Test 2',
                            items: [{ label: 'Test 3', routerLink: ['test3'] }]
                        },

                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa fa-fw fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa fa-fw fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                        {
                            label: 'Technology 3',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Vendor', icon: 'fa fa-fw fa-check',
                items: [
                    [
                        {
                            label: 'Vendor',
                            items: [{ label: 'Add Vendor', routerLink: ['vendor'] },
                             { label: 'update Vendor', routerLink: ['updateVendor'] }]
                        },
                        {
                            label: 'Vendor List',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ]
                ]
            },


        ];
    }
}
