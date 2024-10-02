import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputBoxComponent } from './task-input-box.component';

describe('TaskInputBoxComponent', () => {
  let component: TaskInputBoxComponent;
  let fixture: ComponentFixture<TaskInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInputBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
