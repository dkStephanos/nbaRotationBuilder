from django.views import View
from django.http import HttpResponse
from nba_api.stats.endpoints import teamdashlineups, commonteamroster
from nba_api.stats.static import teams, players
import json


class Players(View):
    def get(self, request):
        active_players = players.get_active_players()

        return HttpResponse(content=json.dumps(active_players))


class Lineups(View):
    def get(self, request, teamId):
        dash = teamdashlineups.TeamDashLineups(teamId)

        return HttpResponse(
            content=json.dumps(
                {
                    "lineups": dash.lineups.get_json(),
                    "overall": dash.overall.get_json(),
                }
            )
        )


class Roster(View):
    def get(self, request, teamId):
        roster = commonteamroster.CommonTeamRoster(teamId)

        return HttpResponse(content=roster.common_team_roster.get_json())
