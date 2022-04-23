import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStoreService } from '../../../service/global-store.service';
import { ApiClientService } from '../../../service/api-client.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private globalStore: GlobalStoreService,
    private service: ApiClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  examForm: any;
  filledDocument: any;
  ngOnInit(): void {
    this.examForm = this.fb.group({
      file: [{ filledApplication: '', acknowledgement: '' }],
      pages: [''],

    });
    localStorage.setItem('EXAMON', 'true');
  }

  selectFile(event: any) {
    console.log(event)
    if (event.target.files.length > 0) {
      this.filledDocument = event.target.files[0]
      console.log(this.filledDocument)
    }
  }
  endTest() {
    const formData = new FormData();
    formData.append('file', this.filledDocument)
    this.service.uploadAnswerSheet(formData, '1518102126', 'U15CS907R20227').subscribe(res => {
      console.log(res);
      localStorage.removeItem('EXAMON');
      this.router.navigate(['/student']);
    })
  }
}
