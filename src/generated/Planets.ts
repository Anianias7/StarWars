/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Planets
// ====================================================

export interface Planets_allPlanets_planets {
  __typename: "Planet";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this planet.
   */
  name: string | null;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod: number | null;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod: number | null;
  /**
   * The diameter of this planet in kilometers.
   */
  diameter: number | null;
  /**
   * The climates of this planet.
   */
  climates: (string | null)[] | null;
  /**
   * The percentage of the planet surface that is naturally occuring water or bodies
   * of water.
   */
  surfaceWater: number | null;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population: number | null;
}

export interface Planets_allPlanets {
  __typename: "PlanetsConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets: (Planets_allPlanets_planets | null)[] | null;
}

export interface Planets {
  allPlanets: Planets_allPlanets | null;
}
