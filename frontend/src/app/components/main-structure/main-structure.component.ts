import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from 'ngx-editor';

@Component({
  selector: 'app-main-structure',
  imports: [NgxEditorComponent, NgxEditorMenuComponent, FormsModule],
  standalone: true,

  templateUrl: './main-structure.component.html',
  styleUrl: './main-structure.component.scss'
})
export class MainStructureComponent {
  html = '';
  editor!: Editor;
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
