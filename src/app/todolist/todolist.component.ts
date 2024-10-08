import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  taskarray=[{taskname:'Brush teeth', isComplted : false}]

  onSubmit(form : NgForm){
        console.log(form);

        this.taskarray.push({
          taskname : form.controls['task'].value,
          isComplted : false
        })

        form.reset(); 
  }

  onDelete(index : number){
      console.log(index);

      this.taskarray.splice(index, 1);
  }

  onChange(index : number){
      console.log(this.taskarray);

      this.taskarray[index].isComplted = !this.taskarray[index].isComplted;
  }

}
