import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateService } from './create.service';
import { SharedService } from '../../shared/shared.service';

describe('createService', () => {
  let service: CreateService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ CreateService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(CreateService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  // test case gp create
  it('should send a POST request to the server', () => {
    const infra = { 
    providertype: 'providertype 1'
    istemplate: 'istemplate 1'
    provider: 'provider 1'
    projectid: 'projectid 1'
    iacframeworks: 'iacframeworks 1'
    iacversions: 'iacversions 1'
    components: 'components 1'
    }
    const infracomponent = { 
    provider: 'provider 1'
    name: 'name 1'
    scriptid: 'scriptid 1'
    scriptlocation: 'scriptlocation 1'
    imagename: 'imagename 1'
    }
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.GpCreate(infrainfracomponent).subscribe(response => {
      expect(response).toEqual(infrainfracomponent)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/infra?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(infrainfracomponent);

    // Flush the mocked response
    req.flush(infrainfracomponent);
  });



  
});
