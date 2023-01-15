import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-codevalidation',
  templateUrl: './codevalidation.component.html',
  styleUrls: ['./codevalidation.component.css']
})
export class CodevalidationComponent implements OnInit {
  btn='Valider';
  numero:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.numero=this.route.snapshot.params['numero'];
  }
onSubmit(){}
}
