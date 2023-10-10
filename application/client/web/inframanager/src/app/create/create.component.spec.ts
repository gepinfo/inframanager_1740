import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { CreateService } from './create.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create.component';


describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let service: CreateService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ CreateComponent ],
      providers: [ CreateService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CreateService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.infra.created_by).toEqual(mockEmail);
    expect(component.infracomponent.created_by).toEqual(mockEmail);

  });
  

  // GpCreate test case file
  it('should call GpCreate and reset  properties', () => {

    // Create a spy for the GpCreate method of the service
    spyOn(service, 'GpCreate').and.returnValue(of({}));
    
    // Set values for infra properties
    component.infra.providertype = 'Test providertype';
    component.infra.istemplate = 'Test istemplate';
    component.infra.provider = 'Test provider';
    component.infra.projectid = 'Test projectid';
    component.infra.iacframeworks = 'Test iacframeworks';
    component.infra.iacversions = 'Test iacversions';
    component.infra.components = 'Test components';
    // Set values for infracomponent properties
    component.infracomponent.provider = 'Test provider';
    component.infracomponent.name = 'Test name';
    component.infracomponent.scriptid = 'Test scriptid';
    component.infracomponent.scriptlocation = 'Test scriptlocation';
    component.infracomponent.imagename = 'Test imagename';


    // Call the GpCreate method
    component.GpCreate();


    // Expect the GpCreate method to have been called with the tickets object
    expect(service.GpCreate).toHaveBeenCalledWith(component.infrainfracomponent);

    // Expect the infra properties to be reset
    expect(component.infra.providertype).toBe('');
    expect(component.infra.istemplate).toBe('');
    expect(component.infra.provider).toBe('');
    expect(component.infra.projectid).toBe('');
    expect(component.infra.iacframeworks).toBe('');
    expect(component.infra.iacversions).toBe('');
    expect(component.infra.components).toBe('');
    // Expect the infracomponent properties to be reset
    expect(component.infracomponent.provider).toBe('');
    expect(component.infracomponent.name).toBe('');
    expect(component.infracomponent.scriptid).toBe('');
    expect(component.infracomponent.scriptlocation).toBe('');
    expect(component.infracomponent.imagename).toBe('');
  });
  it('should log error on update GpCreate failure', () => {
    const error = new Error('GpCreate failed');
    spyOn(service, 'GpCreate').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GpCreate();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });









});