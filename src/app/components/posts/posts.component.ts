import { Component, Input } from '@angular/core';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { Post } from '../../types/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  @Input() post!: Post;
}
