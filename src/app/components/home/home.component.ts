import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { ImdbAdvSearchResponce } from '../../interfaces/imdb-adv-search-responce';
import { DataService } from '../../services/data.service';
import { ImdbApiService } from '../../services/imdb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataFromUsa: Observable<any>;
  dataFromImdb: Observable<ImdbAdvSearchResponce>;

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private dictionaryService: DataService, private imdbApiService: ImdbApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    //this.dataFromUsa = this.dictionaryService.getDataFromUSA();
    this.dataFromImdb = this.imdbApiService.searchMoviesStored();
    this.createForm();
  }

  createForm() {

    this.formGroup = this.formBuilder.group({
      'title': [''],
      'title_type': this.formBuilder.group({
        feature: false,
        tv_special: false,
        short: false,
        podcast_episode: false,
        tv_movie: false,
        tv_series: false,
        tv_short: false,
        mini_series: false,
        video: false,
        documentary: false,
        tv_episode: false,
      }),
      'num_votes': [''],
      'genres': this.formBuilder.group({
        "action": false,
        "adventure": false,
        "animation": false,
        "biography": false,
        "comedy": false,
        "crime": false,
        "documentary": false,
        "drama": false,
        "family": false,
        "fantasy": false,
        "noir": false,
        "history": false,
        "horror": false,
        "music": false,
        "musical": false,
        "mystery": false,
        "news": false,
        "tv": false,
        "romance": false,
        "fi": false,
        "sport": false,
        "show": false,
        "thriller": false,
        "war": false,
        "wester": false,
      }),
      'runtime': [''],
    });
  }


  get name() {
    return this.formGroup.get('name') as FormControl
  }


  onSubmit(post: any) {
    let queryString = '';

    const parseCheckboxes = (checkboxes: any) => {
      let resultString = '';
      for(const box in checkboxes){
        if(checkboxes[box]){ // catch true values
          resultString = `${resultString},${box}`;
        }
      }
      return resultString.length > 0 ? resultString.substring(1) : null;
    }

    for (const property in post) {
      if(typeof post[property] === 'object'){
        const checkboxes = parseCheckboxes(post[property]);
        if(checkboxes){
          queryString = `${queryString}&${property}=${checkboxes}`;
        }
      }else{
        switch(property) {
          case 'title':
            queryString = `${queryString}&${property}=${post[property]}`;
            break;
          case 'num_votes':
          case 'runtime':
            // in real api it should be range from one value to another, that's why we need commas at the end
            queryString = `${queryString}&${property}=${post[property]},`;
            break;
        }
      }
    }
    this.dataFromImdb = this.imdbApiService.searchMovies(queryString.substring(1));
    // this.post = queryString;
  }


}
