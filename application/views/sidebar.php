
    <div class="sidebar" data-color="blue">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    -->
      <div class="sidebar-wrapper">
        <!-- <div class="logo">
          <a href="javascript:void(0)" class="simple-text logo-mini">
            CT
          </a>
          <a href="javascript:void(0)" class="simple-text logo-normal">
            Creative Tim
          </a>
        </div> -->
        <ul class="nav">
          <li class="active" id="jakarta">
            <a href="<?= base_url()?>">
              <i class="tim-icons icon-bank"></i>
              <p>DKI Jakarta</p>
            </a>
          </li>
          <li id="jakarta-pusat">
            <a href="<?= base_url('index.php/city')?>?city=176">
              <i class="tim-icons icon-bank"></i>
              <p>Jakarta Pusat</p>
            </a>
          </li>
          <li id="jakarta-utara">
            <a href="<?= base_url('index.php/city')?>?city=177">
              <i class="tim-icons icon-bank"></i>
              <p>Jakarta Utara</p>
            </a>
          </li>
          <li id="jakarta-timur">
            <a href="<?= base_url('index.php/city')?>?city=178">
              <i class="tim-icons icon-bank"></i>
              <p>Jakarta Timur</p>
            </a>
          </li>
          <li id="jakarta-selatan">
            <a href="<?= base_url('index.php/city')?>?city=175">
              <i class="tim-icons icon-bank"></i>
              <p>Jakarta Selatan</p>
            </a>
          </li>
          <li id="jakarta-barat">
            <a href="<?= base_url('index.php/city')?>?city=174">
              <i class="tim-icons icon-bank"></i>
              <p>Jakarta Barat</p>
            </a>
          </li>
          <!-- <img src="<?= base_url()?>assets/img/dkilogo.png" alt="Logo DKI Jakarta" style = "height:170px; width:150px; display: block; margin-left: auto; margin-right: auto; margin-top:13%;"> -->
        </ul>
      </div>
    </div>