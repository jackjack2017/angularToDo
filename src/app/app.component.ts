import { Component } from '@angular/core';

export interface ITask{
	title: string;
	complete: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anguar App';
  tasks: ITask[] = [
  	{
  		title: 'watch wideo',
  		complete: true
  	},
  	{
  		title: 'install angular',
  		complete: false
  	},
  	{
  		title: 'make changes',
  		complete: false
  	},
  	{
  		title: 'push to a repo',
  		complete: false
  	}
  ];

  add(title){

  	this.tasks.push({
  		title,
  		complete: false
  	})
  }
}
