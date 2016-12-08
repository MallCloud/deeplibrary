this.Images = new Meteor.Files({
  debug: true,
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});


predict = new Meteor.Collection("predictcollection");
predict.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }
});
revenue1 = new Meteor.Collection("revenue1collection");
revenue1.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }

});
revenue2 = new Meteor.Collection("revenue2collection");
revenue2.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }

});
revenue3 = new Meteor.Collection("revenue3collection");
revenue3.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }

});
revenue4 = new Meteor.Collection("revenue4collection");
revenue4.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }

});
revenue5 = new Meteor.Collection("revenue5collection");
revenue5.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }

});
revenue6 = new Meteor.Collection("revenue6collection");
revenue6.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }

});
revenue7 = new Meteor.Collection("revenue7collection");
revenue7.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }

});
algo = new Meteor.Collection("algorithmcollection");
algo.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }
});
cur_setting = new Meteor.Collection("cursettingcollection");
cur_setting.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }
});
engagement = new Meteor.Collection("engagementcollection");
engagement.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }
});
intandact = new Meteor.Collection("intandactcollection");
intandact.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    }
});
grid_org = new Meteor.Collection("grid_orgcollection");
grid_org.allow({
    insert:function(){
        return true;
    },
    remove:function(){
      return true;
    } ,
    update:function(){
      return true;
    }
});
if (Meteor.isServer) {
  Images.denyClient();
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });

} else {

  Meteor.subscribe('files.images.all');
}