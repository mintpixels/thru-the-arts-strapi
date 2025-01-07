import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalElement extends Struct.ComponentSchema {
  collectionName: 'components_global_elements';
  info: {
    displayName: 'Element';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Headline: Schema.Attribute.String;
    TimeEstimate: Schema.Attribute.String;
  };
}

export interface GlobalEntry extends Struct.ComponentSchema {
  collectionName: 'components_global_entries';
  info: {
    displayName: 'Entry';
  };
  attributes: {
    Statement: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface GlobalLink extends Struct.ComponentSchema {
  collectionName: 'components_global_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Text: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LessonClosure extends Struct.ComponentSchema {
  collectionName: 'components_lesson_closures';
  info: {
    displayName: 'Closure';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonEnrichment extends Struct.ComponentSchema {
  collectionName: 'components_lesson_enrichments';
  info: {
    displayName: 'Enrichment';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonExtensionExercises extends Struct.ComponentSchema {
  collectionName: 'components_lesson_extension_exercises';
  info: {
    displayName: 'Extension Exercises';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
  };
}

export interface LessonGoals extends Struct.ComponentSchema {
  collectionName: 'components_lesson_goals';
  info: {
    displayName: 'Goals';
  };
  attributes: {
    Statement: Schema.Attribute.Text;
  };
}

export interface LessonHomework extends Struct.ComponentSchema {
  collectionName: 'components_lesson_homework';
  info: {
    displayName: 'Homework';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
  };
}

export interface LessonHuddle extends Struct.ComponentSchema {
  collectionName: 'components_lesson_huddles';
  info: {
    displayName: 'Huddle';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonImprovisationExercise extends Struct.ComponentSchema {
  collectionName: 'components_lesson_improvisation_exercises';
  info: {
    displayName: 'Improvisation Exercise';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Elements: Schema.Attribute.Component<'global.element', true>;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonMainLesson extends Struct.ComponentSchema {
  collectionName: 'components_lesson_main_lessons';
  info: {
    displayName: 'Main Lesson';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonPhysicalComponent extends Struct.ComponentSchema {
  collectionName: 'components_lesson_physical_components';
  info: {
    displayName: 'Physical Component';
  };
  attributes: {
    Entries: Schema.Attribute.Component<'global.entry', true>;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonResources extends Struct.ComponentSchema {
  collectionName: 'components_lesson_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    AdditionalLinks: Schema.Attribute.Component<'global.link', true>;
    Content: Schema.Attribute.Blocks;
    Links: Schema.Attribute.Component<'global.link', true>;
  };
}

export interface LessonSnackTime extends Struct.ComponentSchema {
  collectionName: 'components_lesson_snack_times';
  info: {
    displayName: 'Snack Time';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonStandards extends Struct.ComponentSchema {
  collectionName: 'components_lesson_standards';
  info: {
    displayName: 'Standards';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Type: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['CR', 'ELA', 'EXL Quality', 'SEL', 'Theatre', 'VAPA']
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface LessonWarmUp extends Struct.ComponentSchema {
  collectionName: 'components_lesson_warm_ups';
  info: {
    displayName: 'Warm Up';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    EstimatedTime: Schema.Attribute.String;
  };
}

export interface LessonWelcomingActivity extends Struct.ComponentSchema {
  collectionName: 'components_lesson_welcoming_activities';
  info: {
    displayName: 'Welcoming Activity';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    EstimatedTime: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.element': GlobalElement;
      'global.entry': GlobalEntry;
      'global.link': GlobalLink;
      'lesson.closure': LessonClosure;
      'lesson.enrichment': LessonEnrichment;
      'lesson.extension-exercises': LessonExtensionExercises;
      'lesson.goals': LessonGoals;
      'lesson.homework': LessonHomework;
      'lesson.huddle': LessonHuddle;
      'lesson.improvisation-exercise': LessonImprovisationExercise;
      'lesson.main-lesson': LessonMainLesson;
      'lesson.physical-component': LessonPhysicalComponent;
      'lesson.resources': LessonResources;
      'lesson.snack-time': LessonSnackTime;
      'lesson.standards': LessonStandards;
      'lesson.warm-up': LessonWarmUp;
      'lesson.welcoming-activity': LessonWelcomingActivity;
    }
  }
}
