export default function Card(data) {
    return(
        <figure class={"card card--" + data.type} style={{display: "flex" }}>
                  <div class="card__image-container">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/Team/" + data.name.split(" ")[0] + ".png"}
                      alt="Person"
                      class="card__image"
                      style={{ 
                        width: "100%",
                        height: "auto",
                        display: "inline-block"
                        }}
                    />
                  </div>

                  <figcaption class="card__caption">
                    <h1 class="card__name">{data.name}</h1>

                    <h3 class="card__type">{data.type}</h3>

                    <table class="card__stats">
                      <tbody>
                        <tr>
                          <th>HP</th>
                          <td>{data.HP}</td>
                        </tr>
                        <tr>
                          <th>Attack</th>
                          <td>{data.ATK}</td>
                        </tr>

                        <tr>
                          <th>Defense</th>
                          <td>{data.DEF}</td>
                        </tr>

                        <tr>
                          <th>Special Attack</th>
                          <td>{data.SPATK}</td>
                        </tr>
                        <tr>
                          <th>Special Defense</th>
                          <td>{data.SPDEF}</td>
                        </tr>
                        <tr>
                          <th>Speed</th>
                          <td>{data.SPEED}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="card__abilities">
                      <h4 class="card__ability">
                        <span class="card__label">Ability</span>
                        {data.Ability}
                      </h4>
                      <h4 class="card__ability">
                        <span class="card__label">Hidden Ability</span>
                        {data.HAbility}
                      </h4>
                    </div>
                  </figcaption>
                </figure>           
    );
}