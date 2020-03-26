import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, arg: any) : any {
        const resultadoPost = [];
        for (const post of value) {
            if (post.title.toLowerCase().indexOf(arg.toLowerCase()) != -1) {
                resultadoPost.push(post)
            }
        }
        return resultadoPost;
    }
}