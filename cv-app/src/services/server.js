import { Model, createServer } from "miragejs";

createServer({
  models: {
    skills: Model,
  },

  routes() {
    this.namespace = "api";

    this.get(
      "/educations",
      () => {
        return {
          educations: [
            {
              date: 2001,
              title: "Title",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            },
            {
              date: 2000,
              title: "Title",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            },
            {
              date: 2012,
              title: "Title",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            },
          ],
        };
      },
      { timing: 3000 }
    );

    this.delete("/educations/1", () => {
      let headers = {};
      let data = {
        errors: ["Something went wrong; please review your server connection!"],
      };

      return new Response(500, headers, data);
    });

    this.get(
        "/skills",
        (schema) => {
          return schema.skills.all();
        },
        { timing: 3000 }
      );
      
   
    this.post("/skills", (schema, request) => {
      let newSkill = JSON.parse(request.requestBody);
      return schema.skills.create(newSkill);
    });
  },
});
