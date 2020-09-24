import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuList: Menu[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    let menu: Menu = {
      name: 'Program Overview',
      path: 'overview',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Register for a Program',
      path: 'register',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Outreach',
      path: 'outreach',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Careers',
      path: 'careers',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Events',
      path: 'events',
      isSelected: false
    };
    this.menuList.push(menu);

    // select the active menu
    setTimeout(() => {
      let activePath = this.router.url;
      const pathList: string[] = activePath.split(`/`);

      if (pathList && pathList.length > 1) {
        activePath = pathList[1];
        const index = this.menuList.findIndex(d => d.path === activePath);
        if (index > -1) {
          this.menuList[index].isSelected = true;
        }
      }
    }, 1500);
  }

  menuSelected(index: number) {
    this.menuList.forEach(d => d.isSelected = false);
    this.menuList[index].isSelected = true;
    this.router.navigateByUrl(this.menuList[index].path);
  }

}
