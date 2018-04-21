import { Component, Input } from '@angular/core';
import { ITask } from '../../app.component'

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  moduleId: module.id
})

export class TaskComponent implements OnInit {
	@Input() item;
	@Input() index;
	@Input() tasks;

	ngOnInit(){
		console.log(this.item);
	}

  toggle(task: ITask){
  	task.complete = !task.complete;
  };

  remove(ind: number){
  	this.tasks.splice(ind, 1);
  }
}