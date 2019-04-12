import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 coursesobj;
  viewMode='list';
  courses=[
    { id:1,name:"first"  },
    { id:2,name:"second"  },
    { id:3,name:"third"  },
  ];

  task ={
    title:'Review application',
    assignee:{
      name:null
    }
  }
  constructor() { }
  AddClick(){
    this.courses.push({id:4,name:"fourth"});
  }
  LoadCourses(){
    this.coursesobj = [
          { id:1,name:"first"  },
          { id:2,name:"second"  },
          { id:3,name:"third"  },
    ];
  }
  RemoveBtn(item){
    let index= this.courses.indexOf(item);
    this.courses.splice(index,1);
  }
  UpdateBtn(item){
    item.name="updated now...";
  }

  trackItem(index,course){
     return course? course.id: undefined;
  }
  ngOnInit() {
  }

}
