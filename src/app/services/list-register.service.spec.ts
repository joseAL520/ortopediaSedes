import { ListRegisterService } from "./list-register.service";
import { TestBed } from "@angular/core/testing";

describe("ListRegisterService", () => {

  let service: ListRegisterService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListRegisterService
      ]
    });
    service = TestBed.get(ListRegisterService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
