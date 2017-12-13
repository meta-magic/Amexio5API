/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioLayoutModule} from "amexio-ng-extensions";

@Component({
  selector: 'tab-demo',
  template: `
    <h1>Tab Demo</h1>

    <amexio-tab-view  [closable]="false">
      <amexio-tab title="Personal" [active]="true">
        <h4>Personal</h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </amexio-tab>
      <amexio-tab title="Work">
        <h4>Work</h4>
        Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus. Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris. Maecenas aliquet fringilla dui, id molestie mi pellentesque sit amet. Praesent vel erat commodo, luctus metus id, dapibus nulla.
      </amexio-tab>
      <amexio-tab title="Notes">
        <h4>Notes</h4>
        Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
      </amexio-tab>
    </amexio-tab-view>
    
    
    <h4>Closeable Tab</h4>

    <amexio-tab-view [closable]="true">
      <amexio-tab title="About" [active]="true">
        <h4>About</h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </amexio-tab>
      <amexio-tab title="Contacts">
        <h4>Contacts</h4>
        Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus. Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris. Maecenas aliquet fringilla dui, id molestie mi pellentesque sit amet. Praesent vel erat commodo, luctus metus id, dapibus nulla.
      </amexio-tab>
      <amexio-tab title="Map">
        <h4>Map</h4>
        Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
      </amexio-tab>
      <amexio-tab title="Admin">
        <h4>Admin</h4>
        ollllj in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
      </amexio-tab>
      <amexio-tab title="Profile">
        <h4>Profile</h4>
        Afvmkkls in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
      </amexio-tab>
      <amexio-tab title="Time">
        <h4>Time</h4>
        Afvmkkls in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
      </amexio-tab>
      <amexio-tab title="Setting">
        <h4>Setting</h4>
        Afvmkkls in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
      </amexio-tab>
      <amexio-tab title="Yum">
        <h4>Setting</h4>
        Afvmkkls in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
      </amexio-tab>
    </amexio-tab-view>


  `
})
export class TabDemo {
  name : string;
}

@NgModule({
  declarations: [TabDemo],
  imports: [
    CommonModule,
    FormsModule,
    AmexioLayoutModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: TabDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class TabDemoModule {

}
