import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StartComponent implements OnChanges{
    public cropWidth : number = 5

    @Input()
    public rating: number = 75

    @Output()
    public ratingClick: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(changes: SimpleChanges): void {
        
        this.cropWidth = this.rating * 75/5;
    }

    public onClick(): void{
        this.ratingClick.emit(`${this.rating}`) 
    }

}