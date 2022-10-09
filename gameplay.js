AFRAME.registerComponent("gameplay", {
  schema: {
    elementId: { type: "string", default: "#coin1" },
  },

  isCollided: function (objectId) {
    const object = document.querySelector(objectId);
    object.addEventListener("collide", (e) => {
      if (objectId.includes("#coin1")) {
        console.log(`${objectId} collision`);
      } else if (objectId.includes("#fish")) {
        console.log(`${objectId} fish collision`);
      }
    });
  },

  update: function () {
    // Do something when component's data is updated.
    this.isCollided(this.data.elementId);
  },
});
