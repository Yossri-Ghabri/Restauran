import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-ngx-bootstrap-modal-hover-button-toolip',
  templateUrl: './ngx-bootstrap-modal-hover-button-toolip.component.html',
  styleUrls: ['./ngx-bootstrap-modal-hover-button-toolip.component.css']
})
export class NgxBootstrapModalHoverButtonToolipComponent implements OnInit {
  public modalRef: BsModalRef; // {1}


  constructor(private modalService: BsModalService) { }  // {2}

  ngOnInit(): void {
  }
  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
