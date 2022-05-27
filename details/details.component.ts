import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any={};
  data:any={};
  img_url:any="";
  constructor(public _router:ActivatedRoute , private _service:MovieServiceService) {
  }

  ngOnInit(): void {
    this.id=this._router.snapshot.params[`id`];
    this.getOneId();
  }
  getOneId(){
    this._service.getOne(this.id).subscribe((res)=>{
       this.data=res;
       console.log(this.data);
       this.img_url="https://image.tmdb.org/t/p/w500/"+this.data.poster_path;
    })
  }
}
