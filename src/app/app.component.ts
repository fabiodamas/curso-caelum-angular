import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmail2';
  private	_isNewEmailFormOpen	=	false;
  
  get	isNewEmailFormOpen(){
					return this._isNewEmailFormOpen;
  }
  
	toggleNewEmailForm()	{
					this._isNewEmailFormOpen	=	!this.isNewEmailFormOpen
	}
}